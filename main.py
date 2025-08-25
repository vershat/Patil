from typing import Optional, List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="String to Characters")

# Add CORS middleware to allow requests from React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextIn(BaseModel):
    text: str  # input string (no trimming; spaces are preserved)

@app.post("/chars", response_model=Optional[List[str]])
def string_to_chars(payload: TextIn) -> Optional[List[str]]:
    s = payload.text
    if len(s) == 0:
        return None  # -> JSON null
    return list(s)   # e.g., "ABC" -> ["A","B","C"]

@app.get("/")
def read_root():
    return {"message": "String to Characters API", "status": "running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
