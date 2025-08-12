# Firebase Hosting Deployment Guide

This guide will help you deploy your SkillUp Career AI application to Firebase Hosting.

## Prerequisites

1. **Firebase CLI** - Already installed ✅
2. **Node.js** - Already installed ✅
3. **Firebase Account** - You'll need a Google account

## Firebase Hosting Setup Steps

### 1. Initialize Firebase Project

First, log in to Firebase and initialize your project:

```bash
# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting
```

When prompted:

- **Select features**: Choose "Hosting: Configure files for Firebase Hosting"
- **Select project**: Create a new project or select an existing one
- **Public directory**: Enter `out` (not `public`)
- **Single-page app**: Yes
- **Overwrite index.html**: No (if prompted)

### 2. Deploy to Firebase

Use the provided deployment script:

```bash
# Make the deploy script executable
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

Or run the commands manually:

```bash
# Build the application
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

## Project Configuration

The project is already configured for Firebase hosting with:

### ✅ Next.js Configuration (`next.config.ts`)

- Static export enabled
- Output directory set to `out`
- Images unoptimized for static hosting
- Trailing slashes enabled

### ✅ Firebase Configuration (`firebase.json`)

- Public directory: `out`
- Single-page app rewrites configured
- Proper caching headers

### ✅ Build Scripts (`package.json`)

- `npm run build` - Standard build
- `npm run build:firebase` - Firebase-optimized build

## Important Notes

### AI Features

The AI features (chatbot, resume scanner, etc.) are currently using placeholder functions for static hosting. To enable full AI functionality, you'll need to:

1. Set up Firebase Cloud Functions or use external APIs
2. Replace the placeholder functions in `src/ai/flows/` with actual implementations
3. Configure environment variables for your AI service (Google AI, OpenAI, etc.)

### Static vs Dynamic

This deployment uses static export, which means:

- ✅ Fast loading and good SEO
- ✅ Works with Firebase Hosting free tier
- ❌ No server-side rendering
- ❌ No API routes (use Cloud Functions instead)

## Deployment Commands

```bash
# Quick deployment
npm run build && firebase deploy --only hosting

# Using the deploy script
./deploy.sh

# Preview before deploying
firebase serve
```

## Troubleshooting

### Build Issues

- Ensure all dependencies are installed: `npm install`
- Clear build cache: `rm -rf .next out`
- Check for TypeScript errors (currently ignored for build)

### Deployment Issues

- Verify Firebase CLI is logged in: `firebase login --reauth`
- Check project selection: `firebase use --add`
- Ensure `out` directory exists and contains build files

### Performance

- The build generates static files optimized for hosting
- All pages are pre-rendered for fast loading
- Images are unoptimized (required for static export)

## Firebase Console

After deployment, you can:

- View your live site
- Monitor hosting analytics
- Configure custom domains
- Set up redirects and headers

Access your Firebase console at: https://console.firebase.google.com

## Custom Domain (Optional)

To add a custom domain:

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Firebase will handle SSL certificates automatically

## Environment Variables

For production AI features, create a `.env.local` file:

```env
GOOGLE_AI_API_KEY=your_api_key_here
FIREBASE_PROJECT_ID=your_project_id
```

Note: Environment variables work differently in static exports. Consider using Cloud Functions for sensitive operations.
