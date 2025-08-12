#!/bin/bash

# Simple build script to work around path issues
echo "🔨 Building Next.js application..."

# Set environment variables to handle path issues
export NODE_OPTIONS="--max-old-space-size=4096"
export NEXT_TELEMETRY_DISABLED=1

# Clear previous builds
rm -rf .next out

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the application
echo "🏗️ Running Next.js build..."
npx next build

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📂 Output directory: ./out"
    echo "📄 Files generated:"
    ls -la out/ | head -10
else
    echo "❌ Build failed!"
    echo ""
    echo "💡 Try the following solutions:"
    echo "1. Move project to a path without special characters"
    echo "2. Run: npm install && rm -rf .next && npm run build"
    echo "3. Check for syntax errors in your code"
fi
