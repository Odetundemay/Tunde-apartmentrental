"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface BookingCalendarProps {
  availability?: Array<{
    startDate: string
    endDate: string
    isBooked: boolean
  }>
  pricePerNight: number
}

export default function BookingCalendar({ availability = [], pricePerNight }: BookingCalendarProps) {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined)
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined)

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const nights = calculateNights()
  const totalPrice = nights * pricePerNight

  const isDateBooked = (date: Date) => {
    if (!Array.isArray(availability)) return false
    return availability.some((period) => {
      if (!period?.startDate || !period?.endDate) return false
      const start = new Date(period.startDate)
      const end = new Date(period.endDate)
      return period.isBooked && date >= start && date <= end
    })
  }

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium mb-2 block">Check-in</Label>
        <Calendar
          mode="single"
          selected={checkIn}
          onSelect={setCheckIn}
          disabled={(date) => date < new Date() || isDateBooked(date)}
          className="rounded-md border"
        />
      </div>

      <div>
        <Label className="text-sm font-medium mb-2 block">Check-out</Label>
        <Calendar
          mode="single"
          selected={checkOut}
          onSelect={setCheckOut}
          disabled={(date) => !checkIn || date <= checkIn || isDateBooked(date)}
          className="rounded-md border"
        />
      </div>

      {nights > 0 && (
        <div className="space-y-2 pt-4 border-t">
          <Button className="w-full" size="lg">
            Request to Book
          </Button>
        </div>
      )}

      {!checkIn || !checkOut ? (
        <p className="text-xs text-muted-foreground text-center pt-4">Select check-in and check-out dates</p>
      ) : null}
    </div>
  )
}
