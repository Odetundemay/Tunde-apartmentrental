import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Bed } from "lucide-react"

interface ApartmentCardProps {
  id: string
  name: string
  location: string
  // pricePerNight: number
  bedrooms: number
  image?: string
  rating?: number
}

export default function ApartmentCard({
  id,
  name,
  location,
  // pricePerNight,
  bedrooms,
  image,
  rating = 4.8,
}: ApartmentCardProps) {
  return (
    <Link href={`/apartments/${id}`}>
      <Card className="overflow-hidden card-hover cursor-pointer h-full border-2 border-transparent hover:border-primary/20">
        <div className="relative h-48 bg-muted">
          {image ? (
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
        </div>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription className="flex items-center gap-1 mt-1">
                <MapPin size={14} />
                {location}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star size={14} className="fill-current" />
              {rating}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Bed size={16} />
              <span className="text-sm">
                {bedrooms} bed{bedrooms !== 1 ? "s" : ""}
              </span>
            </div>
            {/* <div className="text-right">
              <p className="text-2xl font-bold text-primary">${pricePerNight}</p>
              <p className="text-xs text-muted-foreground">per night</p>
            </div> */}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
