#!/bin/bash

# Build script for Maharashtra Tourism Frontend
echo "🚀 Starting build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npx vite build

echo "✅ Build completed successfully!"
