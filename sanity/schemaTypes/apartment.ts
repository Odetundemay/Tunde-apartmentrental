import { defineField, defineType } from "sanity"

export const apartment = defineType({
  name: "apartment",
  title: "Apartment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Apartment Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pricePerNight",
      title: "Price Per Night",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "bedrooms",
      title: "Number of Bedrooms",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "startDate",
              title: "Start Date",
              type: "date",
            },
            {
              name: "endDate",
              title: "End Date",
              type: "date",
            },
            {
              name: "isBooked",
              title: "Is Booked",
              type: "boolean",
              initialValue: false,
            },
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
})
