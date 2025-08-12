# 🚀 Firebase Hosting Setup Guide

Your Next.js application is now configured for Firebase hosting! Here's your complete deployment guide.

## ⚠️ Important Note About Project Path

Your project is located at a path with a single quote (`niharika'sProject`), which can cause build issues with Next.js. If you encounter build problems, consider moving your project to a path without special characters.

## 📋 Prerequisites

- Node.js (version 18 or higher)
- A Google account
- Firebase CLI installed globally

## 🔧 Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

## 🆕 Step 2: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"** or **"Add project"**
3. Enter your project name (e.g., "skillup-career-ai")
4. Choose whether to enable Google Analytics (optional)
5. Click **"Create project"**

## 🔥 Step 3: Enable Firebase Hosting

1. In your Firebase Console, go to **"Hosting"** from the left sidebar
2. Click **"Get started"**
3. Note down your **project ID** (you'll need this next)

## ⚙️ Step 4: Configure Your Project

1. Open `.firebaserc` file in your project root
2. Replace `"your-firebase-project-id"` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

## 🔐 Step 5: Login to Firebase CLI

```bash
firebase login
```

This will open your browser for authentication.

## 🚀 Step 6: Deploy Your Application

### Option A: Automated Deployment (Recommended)

```bash
./deploy.sh
```

### Option B: Manual Deployment

```bash
# Install dependencies
npm install

# Build the application
npm run build:firebase

# Create .nojekyll file
touch out/.nojekyll

# Deploy to Firebase
firebase deploy --only hosting
```

## 🎯 Step 7: Verify Deployment

After successful deployment, you'll receive hosting URLs:
- **Primary URL**: `https://your-project-id.web.app`
- **Secondary URL**: `https://your-project-id.firebaseapp.com`

## 🔧 Configuration Files Summary

Your project now includes these Firebase-ready files:

### `firebase.json`
```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{"source": "**", "destination": "/index.html"}],
    "headers": [
      {
        "source": "**/*.@(js|jsx|ts|tsx|css|html|json|svg|png|jpg|jpeg|gif|ico|woff|woff2|ttf|eot)",
        "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]
      }
    ]
  }
}
```

### `next.config.ts`
- ✅ Static export enabled (`output: "export"`)
- ✅ Trailing slashes for Firebase compatibility
- ✅ Images unoptimized for static export
- ✅ Output directory set to `out`

### `package.json`
- ✅ Added `build:firebase` script

## 🐛 Troubleshooting

### Common Issues:

#### 1. **Build fails due to path with special characters**
```bash
# Solution: Try building with environment variables
export NODE_OPTIONS="--max-old-space-size=4096"
export NEXT_TELEMETRY_DISABLED=1
npm run build:firebase
```

#### 2. **Module resolution errors**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build:firebase
```

#### 3. **Firebase CLI not found**
```bash
npm install -g firebase-tools
firebase login
```

#### 4. **Permission denied on deploy.sh**
```bash
chmod +x deploy.sh
```

## 🌍 Environment Variables

If your app uses environment variables, create a `.env.local` file:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
# Add other environment variables as needed
```

## 🔄 Continuous Deployment (Optional)

For automatic deployments:
1. Run `firebase init hosting:github`
2. Connect your GitHub repository
3. Configure GitHub Actions workflows

## 🌐 Custom Domain (Optional)

To use a custom domain:
1. In Firebase Console → Hosting
2. Click **"Add custom domain"**
3. Follow verification instructions
4. Update DNS records as instructed

## 📁 Project Structure
```
skillup-career-ai/
├── firebase.json          # Firebase hosting configuration
├── .firebaserc           # Firebase project settings
├── next.config.ts        # Next.js config (Firebase-ready)
├── tsconfig.json         # TypeScript configuration
├── deploy.sh            # Deployment script
├── out/                 # Built static files (after build)
└── src/                 # Your source code
```

## 🎉 Next Steps

1. **Test locally**: `npm run dev`
2. **Build**: `npm run build:firebase`
3. **Deploy**: `./deploy.sh`
4. **Visit your site**: Check the URL provided after deployment

Your Next.js application is now Firebase hosting ready! 🚀

## 📞 Need Help?

If you encounter issues:
1. Check the [Firebase Hosting documentation](https://firebase.google.com/docs/hosting)
2. Review the [Next.js static export guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
3. Ensure all dependencies are installed: `npm install`
