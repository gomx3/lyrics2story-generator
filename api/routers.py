from fastapi import APIRouter
import torch
import pickle
from schemas import LyricsInput, StoryOutput

# 모델과 토크나이저 파일 경로 설정
model_path = "../models/emotion_model.pth"
tokenizer_path = "../models/emotion_tokenizer.pkl"

# device 설정
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# 전체 모델 불러오기
model = torch.load(model_path, map_location=device)
model.to(device)
model.eval()  # 추론 모드 전환

# 토크나이저 불러오기
with open(tokenizer_path, "rb") as f:
    tokenizer = pickle.load(f)

# FastAPI 라우터 생성 (여기서는 'emotion' prefix 사용)
emotion_api = APIRouter(prefix="/emotion", tags=["emotion"])

@emotion_api.get("/")
async def root():
    return {"msg": "Emotion Story Generation API"}

@emotion_api.post("/predict", response_model=StoryOutput)
async def predict_story(data_request: LyricsInput):
    """
    LyricsInput 스키마는 prompt (문자열)를 포함해야 합니다.
    예시: "0 | 3 | 가사 혹은 텍스트 내용"
    """
    prompt = data_request.prompt

    # 입력 토큰화 및 device 이동
    input_ids = tokenizer.encode(prompt, return_tensors="pt").to(device)

    # 모델을 사용한 이야기 생성
    output = model.generate(
        input_ids,
        max_new_tokens=150,    # 새로 생성할 토큰의 최대 개수
        num_return_sequences=1,
        temperature=0.8,
        top_k=50,
        top_p=0.9,
        repetition_penalty=1.2,
        do_sample=True
    )

    # 입력 텍스트 이후의 토큰만 추출하여 디코딩
    input_length = input_ids.shape[1]
    generated_tokens = output[0][input_length:]
    generated_story = tokenizer.decode(generated_tokens, skip_special_tokens=True)

    return {"generated_story": generated_story}
