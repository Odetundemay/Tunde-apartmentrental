"use client"

import { useEffect, useState } from "react"
import { getFeaturedApartments } from "@/lib/sanity"
import ApartmentCard from "./apartment-card"
import { Skeleton } from "@/components/ui/skeleton"

export default function FeaturedApartments() {
  const [apartments, setApartments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadApartments() {
      try {
        const data = await getFeaturedApartments()
        setApartments(data)
      } catch (error) {
        console.error("Failed to load apartments:", error)
      } finally {
        setLoading(false)
      }
    }

    loadApartments()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-80 rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apartments.map((apt) => (
        <ApartmentCard
          key={apt._id}
          id={apt._id}
          name={apt.name}
          location={apt.location}
          // pricePerNight={apt.pricePerNight}
          bedrooms={apt.bedrooms}
          image={apt.images?.[0]?.asset?.url}
        />
      ))}
    </div>
  )
}
