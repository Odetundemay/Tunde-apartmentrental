# Luxury Stays - Deployment Guide

## Prerequisites

Before deploying, ensure you have:

1. **Sanity Account**: Create a free account at [sanity.io](https://www.sanity.io)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **GitHub Account**: For version control and deployment

## Step 1: Setup Sanity CMS

### Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and create a new project
2. Choose "Structured Content" as your project type
3. Select a dataset (e.g., "production")
4. Note your **Project ID** and **Dataset name**

### Add Environment Variables

Create a `.env.local` file in your project root:

\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

### Deploy Sanity Studio

\`\`\`bash
npm run sanity -- deploy
\`\`\`

This will deploy your Sanity Studio to a unique URL where you can manage your content.

## Step 2: Add Sample Data to Sanity

1. Go to your Sanity Studio URL
2. Create a new "Apartment" document
3. Fill in the following fields:
   - **Name**: e.g., "Luxury Downtown Loft"
   - **Location**: e.g., "Downtown, City"
   - **Price Per Night**: e.g., 250
   - **Bedrooms**: e.g., 2
   - **Description**: Add a detailed description
   - **Amenities**: Add amenities like "WiFi", "TV", "Coffee Maker", "AC"
   - **Images**: Upload apartment photos
   - **Featured**: Toggle to true for featured apartments
   - **Availability**: Add date ranges for booking availability

## Step 3: Deploy to Vercel

### Option A: Using GitHub (Recommended)

1. Push your code to GitHub:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/luxury-stays.git
   git push -u origin main
   \`\`\`

2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET`: Your dataset name (e.g., "production")
5. Click "Deploy"

### Option B: Using Vercel CLI

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

Follow the prompts and add your environment variables when asked.

## Step 4: Configure CORS in Sanity

1. Go to your Sanity project settings
2. Navigate to "API" → "CORS origins"
3. Add your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
4. Also add `http://localhost:3000` for local development

## Step 5: Verify Deployment

1. Visit your Vercel deployment URL
2. Check that:
   - Home page loads with featured apartments
   - Apartments listing page displays all apartments
   - Filters work correctly
   - Apartment detail pages load with images and booking calendar
   - About and Contact pages are accessible

## Troubleshooting

### Apartments not showing up?

1. Check that you've added apartments in Sanity Studio
2. Verify environment variables are set correctly
3. Check browser console for API errors
4. Ensure CORS is configured in Sanity

### Images not loading?

1. Verify images are uploaded in Sanity
2. Check that Sanity CDN is accessible
3. Clear browser cache and reload

### Booking calendar not working?

1. Ensure availability dates are set in Sanity
2. Check browser console for JavaScript errors

## Next Steps

- Add payment integration (Stripe) for bookings
- Implement user authentication
- Add email notifications for bookings
- Setup analytics and monitoring
- Optimize images and performance

## Support

For issues with:
- **Sanity**: Visit [sanity.io/help](https://www.sanity.io/help)
- **Vercel**: Visit [vercel.com/support](https://vercel.com/support)
- **Next.js**: Visit [nextjs.org/docs](https://nextjs.org/docs)
