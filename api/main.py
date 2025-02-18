from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import emotion_api  # 앞서 작성한 emotion_api 라우터

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# emotion_api 라우터 포함
app.include_router(emotion_api)

# 기본 엔드포인트
@app.get("/")
async def root():
    return {"msg": "Emotion Story Generation API"}

# FastAPI 실행 (uvicorn으로 실행해야 함)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)