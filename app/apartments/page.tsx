"use client"

import { useEffect, useState, useMemo } from "react"
import { getApartments } from "@/lib/sanity"
import ApartmentCard from "@/components/apartment-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, Filter } from "lucide-react"

export default function ApartmentsPage() {
  const [apartments, setApartments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([])
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    async function loadApartments() {
      try {
        const data = await getApartments()
        setApartments(data)
      } catch (error) {
        console.error("Failed to load apartments:", error)
      } finally {
        setLoading(false)
      }
    }

    loadApartments()
  }, [])

  const filteredApartments = useMemo(() => {
    return apartments.filter((apt) => {
      const matchesSearch =
        apt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.location.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesPrice = apt.pricePerNight >= priceRange[0] && apt.pricePerNight <= priceRange[1]

      const matchesBedrooms = selectedBedrooms.length === 0 || selectedBedrooms.includes(apt.bedrooms)

      return matchesSearch && matchesPrice && matchesBedrooms
    })
  }, [apartments, searchTerm, priceRange, selectedBedrooms])

  const toggleBedroom = (bedroom: number) => {
    setSelectedBedrooms((prev) => (prev.includes(bedroom) ? prev.filter((b) => b !== bedroom) : [...prev, bedroom]))
  }

  const maxPrice = Math.max(...apartments.map((apt) => apt.pricePerNight), 1000)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Our Apartments</h1>
          <p className="text-lg text-muted-foreground">Browse our collection of luxury apartments and shortlets</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="flex items-center justify-between lg:block mb-4 lg:mb-0">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Filter size={20} />
                Filters
              </h2>
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                {showFilters ? "Hide" : "Show"}
              </Button>
            </div>

            {/* Filters Content */}
            <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              {/* Search */}
              <div>
                <Label className="text-base font-semibold mb-3 block">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <Input
                    placeholder="Search by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Price Range */}
              {/* <div>
                <Label className="text-base font-semibold mb-3 block">Price Range</Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={maxPrice}
                  step={50}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div> */}

              {/* Bedrooms */}
              <div>
                <Label className="text-base font-semibold mb-3 block">Bedrooms</Label>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((bedroom) => (
                    <div key={bedroom} className="flex items-center space-x-2">
                      <Checkbox
                        id={`bedroom-${bedroom}`}
                        checked={selectedBedrooms.includes(bedroom)}
                        onCheckedChange={() => toggleBedroom(bedroom)}
                      />
                      <Label htmlFor={`bedroom-${bedroom}`} className="font-normal cursor-pointer">
                        {bedroom} Bedroom{bedroom !== 1 ? "s" : ""}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setPriceRange([0, maxPrice])
                  setSelectedBedrooms([])
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Apartments Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="h-80 rounded-lg" />
                ))}
              </div>
            ) : filteredApartments.length > 0 ? (
              <>
                <div className="mb-4 text-sm text-muted-foreground">
                  Showing {filteredApartments.length} apartment{filteredApartments.length !== 1 ? "s" : ""}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredApartments.map((apt) => (
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
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">No apartments found matching your criteria</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setPriceRange([0, maxPrice])
                    setSelectedBedrooms([])
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
