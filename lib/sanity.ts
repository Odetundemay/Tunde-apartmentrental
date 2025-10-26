import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "dge79flv",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getApartments() {
  return client.fetch(`*[_type == "apartment"]{
    _id,
    _createdAt,
    name,
    location,
    pricePerNight,
    bedrooms,
    description,
    amenities,
    featured,
    slug,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    availability
  } | order(_createdAt desc)`)
}

export async function getFeaturedApartments() {
  return client.fetch(`*[_type == "apartment" && featured == true]{
    _id,
    _createdAt,
    name,
    location,
    pricePerNight,
    bedrooms,
    description,
    amenities,
    featured,
    slug,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    availability
  } | order(_createdAt desc)[0...3]`)
}

export async function getApartmentBySlug(slug: string) {
  return client.fetch(`*[_type == "apartment" && name == $slug][0]{
    _id,
    _createdAt,
    name,
    location,
    pricePerNight,
    bedrooms,
    description,
    amenities,
    featured,
    slug,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    availability
  }`, { slug })
}

export async function getApartmentById(id: string) {
  return client.fetch(`*[_type == "apartment" && _id == $id][0]{
    _id,
    _createdAt,
    name,
    location,
    pricePerNight,
    bedrooms,
    description,
    amenities,
    featured,
    slug,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    availability
  }`, { id })
}
