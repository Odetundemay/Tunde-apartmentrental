# Luxury Stays - Premium Apartment Rental Platform

A modern, mobile-friendly website for a luxury apartment rental and shortlet business built with Next.js and Sanity CMS.

## Features

- **Home Page**: Hero section with featured apartments showcase
- **Apartments Listing**: Browse all apartments with advanced filtering
  - Search by name or location
  - Filter by price range
  - Filter by number of bedrooms
- **Apartment Details**: Comprehensive apartment information
  - Full image gallery
  - Amenities list
  - Interactive booking calendar
  - Availability management
- **About Page**: Company information and values
- **Contact Page**: Contact form and business information
- **Responsive Design**: Fully mobile-friendly interface
- **CMS Integration**: Manage all content through Sanity Studio

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **CMS**: Sanity.io
- **Deployment**: Vercel
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Sanity account (free tier available)
- Vercel account (optional, for deployment)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/luxury-stays.git
   cd luxury-stays
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   pnpm install
   \`\`\`

3. Create `.env.local` file:
   \`\`\`env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Sanity Studio

Access your Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) or deploy it separately.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Your Sanity dataset name | Yes |

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. Push to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

## Content Management

### Adding Apartments

1. Access Sanity Studio
2. Create a new "Apartment" document
3. Fill in all required fields:
   - Name
   - Location
   - Price per night
   - Number of bedrooms
   - Description
   - Amenities
   - Images
   - Availability dates
4. Toggle "Featured" to show on home page
5. Publish

### Managing Availability

Set booking availability directly in each apartment's availability field. Mark dates as booked to prevent new bookings.

## Customization

### Colors and Branding

Edit `app/globals.css` to customize the color scheme using CSS variables.

### Content

All content is managed through Sanity Studio. No code changes needed for content updates.

### Components

Modify components in `components/` directory to customize the UI.

## Performance

- Optimized images with Next.js Image component
- Server-side rendering for better SEO
- Sanity CDN for fast content delivery
- Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues and questions:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Visit [nextjs.org/docs](https://nextjs.org/docs)
- Visit [sanity.io/help](https://www.sanity.io/help)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and Sanity
