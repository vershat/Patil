# Deployment Guide

## Quick Deployment Options

### 1. Render (Recommended - Free Tier)

**Backend Deployment:**
1. Go to [Render.com](https://render.com) and create an account
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `string-to-chars-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Click "Create Web Service"

**Frontend Deployment:**
1. Build the React app: `npm run build`
2. Go to [Netlify.com](https://netlify.com) or [Vercel.com](https://vercel.com)
3. Deploy the `build` folder
4. Update the API URL in the frontend to point to your Render backend

### 2. Railway (Alternative - Free Tier)

1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will auto-detect the Python app
4. Deploy automatically

### 3. Heroku (Legacy - Paid)

1. Install Heroku CLI
2. Run: `heroku create your-app-name`
3. Run: `git push heroku main`

## Environment Variables

For production, you may want to set these environment variables:

```bash
# Backend
PORT=8000
CORS_ORIGINS=https://your-frontend-domain.com

# Frontend
REACT_APP_API_URL=https://your-backend-domain.com
```

## Build Commands

**Backend:**
```bash
pip install -r requirements.txt
```

**Frontend:**
```bash
npm install
npm run build
```

## Testing Deployment

1. **Backend Health Check:**
```bash
curl https://your-app-name.onrender.com/
```

2. **API Test:**
```bash
curl -X POST https://your-app-name.onrender.com/chars \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello World"}'
```

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your backend allows requests from your frontend domain
2. **Build Failures**: Check that all dependencies are in `requirements.txt`
3. **Port Issues**: Use `$PORT` environment variable for cloud platforms

### Local Testing:

```bash
# Terminal 1 - Backend
python3 main.py

# Terminal 2 - Frontend
npm start
```

Visit `http://localhost:3000` to test the complete application.
