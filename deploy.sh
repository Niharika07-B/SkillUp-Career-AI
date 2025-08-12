#!/bin/bash

# Firebase Hosting Deployment Script for Next.js
# This script builds the Next.js app and deploys it to Firebase Hosting

echo "🚀 Starting Firebase deployment process..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Please install it first:"
    echo "npm install -g firebase-tools"
    exit 1
fi

# Check current directory
CURRENT_DIR=$(pwd)
echo "📁 Current directory: $CURRENT_DIR"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Clear Next.js cache to avoid path issues
echo "🧹 Clearing Next.js cache..."
rm -rf .next out

# Create a simple build workaround for path issues
echo "🔨 Building Next.js app for static export..."

# Set NODE_OPTIONS to avoid the path issue
export NODE_OPTIONS="--max-old-space-size=4096"
export NEXT_TELEMETRY_DISABLED=1

# Build the application
npm run build:firebase

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Create .nojekyll file to prevent GitHub Pages Jekyll processing
    echo "📝 Creating .nojekyll file..."
    touch out/.nojekyll
    
    # List the contents of out directory
    echo "📂 Built files:"
    ls -la out/
    
    # Deploy to Firebase
    echo "🚀 Deploying to Firebase Hosting..."
    firebase deploy --only hosting
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "Your app is now live on Firebase Hosting!"
        echo "Check your Firebase Console for the hosting URL"
    else
        echo "❌ Deployment failed. Please check the errors above."
        exit 1
    fi
else
    echo "❌ Build failed. Please fix the errors and try again."
    echo ""
    echo "💡 Common solutions:"
    echo "1. Try moving your project to a path without special characters"
    echo "2. Run: npm install && rm -rf .next && npm run build:firebase"
    echo "3. Check that all dependencies are properly installed"
    exit 1
fi
