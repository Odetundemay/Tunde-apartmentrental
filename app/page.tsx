import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturedApartments from "@/components/featured-apartments"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Discover Your Perfect Luxury Stay
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Experience premium apartments and shortlets designed for comfort and elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/apartments">Explore Apartments</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Apartments Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Apartments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked luxury apartments and shortlets for your next getaway
            </p>
          </div>

          <FeaturedApartments />

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/apartments">View All Apartments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Properties</h3>
              <p className="text-muted-foreground">Carefully curated luxury apartments in prime locations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">World-Class Amenities</h3>
              <p className="text-muted-foreground">Fully equipped with modern facilities and services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-muted-foreground">Simple and secure booking process with 24/7 support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
