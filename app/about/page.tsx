import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Users, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Luxury Stays</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our story and commitment to providing exceptional luxury apartment experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              At Luxury Stays, we believe that every traveler deserves an exceptional experience. Our mission is to
              provide premium, beautifully designed apartments and shortlets that feel like home, combined with
              world-class service and attention to detail.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We carefully curate each property to ensure it meets our high standards for comfort, style, and amenities.
              Whether you're traveling for business or leisure, we're committed to making your stay unforgettable.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-96 flex items-center justify-center">
            <span className="text-6xl">🏢</span>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-muted/50 border-0">
              <CardHeader>
                <Award className="text-primary mb-2" size={32} />
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain the highest standards in every aspect of our service and properties.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 border-0">
              <CardHeader>
                <Users className="text-primary mb-2" size={32} />
                <CardTitle>Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We're here to support you 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 border-0">
              <CardHeader>
                <Globe className="text-primary mb-2" size={32} />
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We make luxury travel accessible to everyone with competitive pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 border-0">
              <CardHeader>
                <CheckCircle className="text-primary mb-2" size={32} />
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can count on us to deliver consistent, reliable service every time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg opacity-90">Happy Guests</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-lg opacity-90">Premium Properties</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.9★</p>
              <p className="text-lg opacity-90">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Our dedicated team of hospitality professionals is passionate about creating memorable experiences for every
            guest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                  <h3 className="font-semibold mb-1">Team Member {i}</h3>
                  <p className="text-sm text-muted-foreground">Hospitality Expert</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Browse our collection of premium apartments and book your perfect stay today.
          </p>
          <Button asChild size="lg">
            <Link href="/apartments">Explore Apartments</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
