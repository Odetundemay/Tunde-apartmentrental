"use client"

import type React from "react"

import { useEffect, useState, use } from "react"
import { getApartmentById } from "@/lib/sanity"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar, MapPin, Bed, Users, Wifi, Tv, Coffee, Wind } from "lucide-react"
import BookingCalendar from "@/components/booking-calendar"

export default function ApartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const [apartment, setApartment] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    async function loadApartment() {
      try {
        const data = await getApartmentById(resolvedParams.id)
        setApartment(data)
      } catch (error) {
        console.error("Failed to load apartment:", error)
      } finally {
        setLoading(false)
      }
    }

    loadApartment()
  }, [resolvedParams.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-96 rounded-lg mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Skeleton className="lg:col-span-2 h-96" />
            <Skeleton className="h-96" />
          </div>
        </div>
      </div>
    )
  }

  if (!apartment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Apartment not found</h1>
          <p className="text-muted-foreground">The apartment you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const mainImage = apartment.images?.[selectedImageIndex]?.asset?.url
  const amenityIcons: Record<string, React.ReactNode> = {
    wifi: <Wifi size={20} />,
    tv: <Tv size={20} />,
    coffee: <Coffee size={20} />,
    ac: <Wind size={20} />,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Image */}
        <div className="relative h-96 md:h-[500px] bg-muted rounded-lg overflow-hidden mb-4">
          {mainImage ? (
            <Image src={mainImage || "/placeholder.svg"} alt={apartment.name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
              <span className="text-muted-foreground">No image available</span>
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {apartment.images && apartment.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-4">
            {apartment.images.map((img: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${
                  selectedImageIndex === idx ? "border-primary" : "border-border"
                }`}
              >
                <Image
                  src={img.asset.url || "/placeholder.svg"}
                  alt={`${apartment.name} ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{apartment.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} />
                    <span>{apartment.location}</span>
                  </div>
                </div>
                <Badge className="text-lg px-4 py-2">4.8 ⭐</Badge>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="bg-muted/50 border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Bed className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Bedrooms</p>
                      <p className="text-2xl font-bold">{apartment.bedrooms}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Users className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Guests</p>
                      <p className="text-2xl font-bold">{apartment.bedrooms * 2}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Available</p>
                      <p className="text-2xl font-bold">Yes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">About this apartment</h2>
              <p className="text-muted-foreground leading-relaxed">{apartment.description}</p>
            </div>

            {/* Amenities */}
            {apartment.amenities && apartment.amenities.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {apartment.amenities.map((amenity: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="text-primary">{amenityIcons[amenity.toLowerCase()] || "✓"}</div>
                      <span className="font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Book Your Stay</CardTitle>
                <CardDescription>Select your dates to check availability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <BookingCalendar availability={apartment.availability || []} pricePerNight={0} />
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">Contact our support team for any questions about this apartment.</p>
                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
