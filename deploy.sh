#!/bin/bash

echo "🚀 Deploying String to Characters Converter..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: String to Characters Converter"
fi

echo "✅ Project is ready for deployment!"
echo ""
echo "🌐 Deployment Options:"
echo "1. Render (Recommended - Free):"
echo "   - Go to https://render.com"
echo "   - Connect your GitHub repository"
echo "   - Create new Web Service"
echo "   - Build Command: pip install -r requirements.txt"
echo "   - Start Command: uvicorn main:app --host 0.0.0.0 --port \$PORT"
echo ""
echo "2. Railway:"
echo "   - Go to https://railway.app"
echo "   - Connect your GitHub repository"
echo "   - Railway will auto-detect the Python app"
echo ""
echo "3. Heroku:"
echo "   - Install Heroku CLI"
echo "   - Run: heroku create your-app-name"
echo "   - Run: git push heroku main"
echo ""
echo "📝 For frontend deployment:"
echo "   - Build: npm run build"
echo "   - Deploy build folder to Netlify/Vercel"
echo ""
echo "🔗 API will be available at: https://your-app-name.onrender.com"
echo "🔗 Frontend can be deployed separately to Netlify/Vercel"
