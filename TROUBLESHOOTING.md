# Troubleshooting Guide

## Common Issues and Solutions

### 1. Module Resolution Errors

**Problem**: `Module not found: Error: Can't resolve '/path/to/index.js'`

**Solution**: 
- Clear React cache: `rm -rf node_modules/.cache`
- Remove build folder: `rm -rf build`
- Restart development server: `npm start`

### 2. Port Already in Use

**Problem**: `Something is already running on port 3000`

**Solution**:
- Kill existing processes: `pkill -f "react-scripts"`
- Or use a different port: Press `Y` when prompted

### 3. Tailwind CSS Not Working

**Problem**: Styles not applying

**Solution**:
- Ensure `@tailwind` directives are in `src/index.css`
- Check `tailwind.config.js` content paths
- Restart development server

### 4. API Connection Issues

**Problem**: Frontend can't connect to backend

**Solution**:
- Ensure backend is running: `python3 main.py`
- Check proxy setting in `package.json`
- Verify CORS configuration in `main.py`

### 5. Build Errors

**Problem**: `npm run build` fails

**Solution**:
- Update dependencies: `npm install`
- Clear cache: `rm -rf node_modules/.cache`
- Check for syntax errors in JSX files

## Development Commands

```bash
# Start backend
python3 main.py

# Start frontend (in new terminal)
npm start

# Build for production
npm run build

# Install dependencies
npm install

# Clear cache
rm -rf node_modules/.cache
```

## File Structure Verification

Ensure your project has this structure:
```
src/
├── App.jsx          # Main component
├── index.jsx        # Entry point
└── index.css        # Tailwind imports
```

## Testing Checklist

- [ ] Backend responds to health check: `curl http://localhost:8000/`
- [ ] API converts strings: `curl -X POST http://localhost:8000/chars -H "Content-Type: application/json" -d '{"text": "test"}'`
- [ ] Frontend loads: Visit `http://localhost:3000`
- [ ] UI is responsive and styled with Tailwind
- [ ] Character conversion works in browser
- [ ] Empty string shows "INVALID STRING"
