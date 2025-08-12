#!/bin/bash

# Firebase Deployment Verification Script
echo "🔍 Verifying Firebase deployment readiness..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Install with: npm install -g firebase-tools"
    exit 1
else
    echo "✅ Firebase CLI is installed"
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Make sure you're in the project root directory."
    exit 1
else
    echo "✅ Project directory structure looks correct"
fi

# Check if firebase.json exists
if [ ! -f "firebase.json" ]; then
    echo "❌ firebase.json not found. Run 'firebase init hosting' first."
    exit 1
else
    echo "✅ firebase.json configuration found"
fi

# Check if next.config.ts is properly configured
if grep -q '"export"' next.config.ts; then
    echo "✅ Next.js configured for static export"
else
    echo "❌ Next.js not configured for static export"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "⚠️  Dependencies not installed. Running npm install..."
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Dependencies installed successfully"
    else
        echo "❌ Failed to install dependencies"
        exit 1
    fi
else
    echo "✅ Dependencies are installed"
fi

# Test build
echo "🔨 Testing build process..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

# Check if out directory exists and has content
if [ -d "out" ] && [ "$(ls -A out)" ]; then
    echo "✅ Build output directory (out/) contains files"
    echo "📂 Build output:"
    ls -la out/ | head -10
else
    echo "❌ Build output directory is empty or missing"
    exit 1
fi

# Check Firebase login status
echo "🔐 Checking Firebase authentication..."
firebase list --project-info 2>/dev/null
if [ $? -eq 0 ]; then
    echo "✅ Firebase authentication successful"
else
    echo "⚠️  Firebase authentication needed. Run 'firebase login' first."
fi

echo ""
echo "🎉 All checks passed! Your project is ready for Firebase deployment."
echo ""
echo "Next steps:"
echo "1. Run 'firebase login' if not already logged in"
echo "2. Run 'firebase init hosting' if you haven't initialized Firebase"
echo "3. Run './deploy.sh' or 'firebase deploy --only hosting' to deploy"
echo ""
echo "💡 For detailed instructions, see FIREBASE_DEPLOYMENT.md"
