# String to Characters Converter

A beautiful web application that converts strings into individual characters with a modern React frontend (JSX + Tailwind CSS) and FastAPI backend.

## Features

- ✨ Beautiful, responsive UI with Tailwind CSS animations
- 🔤 Convert any string to individual characters
- ⚠️ Handle empty strings with "INVALID STRING" message
- 📱 Mobile-friendly design
- 🚀 Fast API responses
- 🎨 Modern gradient design with Tailwind CSS

## Project Structure

```
PatilGroup/
├── main.py              # FastAPI backend
├── requirements.txt     # Python dependencies
├── package.json         # React dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── public/
│   └── index.html      # HTML template
└── src/
    ├── App.jsx         # Main React component (JSX)
    ├── index.jsx       # React entry point (JSX)
    └── index.css       # Tailwind CSS imports
```

## Local Development

### Backend Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Run the FastAPI server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Install Node.js dependencies:
```bash
npm install
```

2. Start the React development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

- `GET /` - Health check
- `POST /chars` - Convert string to characters
  - Request body: `{"text": "your string"}`
  - Response: `["c", "h", "a", "r", "s"]` or `null` for empty strings

## Deployment

### Option 1: Render (Recommended - Free)

1. Create a Render account at https://render.com
2. Connect your GitHub repository
3. Create a new Web Service
4. Set build command: `pip install -r requirements.txt`
5. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. Deploy!

### Option 2: Railway

1. Create a Railway account at https://railway.app
2. Connect your GitHub repository
3. Railway will auto-detect the Python app
4. Deploy!

### Option 3: Heroku

1. Create a `Procfile`:
```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

2. Deploy to Heroku using their CLI or GitHub integration

## Usage

1. Enter any text in the input field
2. Click "Convert to Characters"
3. View the result as individual character boxes
4. Empty strings will show "INVALID STRING"

## Technologies Used

- **Backend**: FastAPI, Python
- **Frontend**: React (JSX), Tailwind CSS
- **Styling**: Tailwind CSS with custom animations
- **HTTP Client**: Axios

## License

MIT License
