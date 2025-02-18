# lyrics2story-generator (kor)

이 프로젝트는 사용자가 입력한 가사를 바탕으로 스토리를 생성하는 애플리케이션으로, CUAI 7기 동계 컨퍼런스 NLP2팀에서 진행한 프로젝트를 심화해 개인적으로 진행한 토이 프로젝트입니다.

- React
- TypeScript
- TailwindCSS
- Python (FastAPI, Uvicorn)

## 프론트엔드 실행

1. `story-generator` 디렉토리에서 의존성을 설치합니다.
   `npm install`
2. 로컬 서버를 실행합니다.
   `npm run dev`

   http://localhost:3000으로 접속하여 확인할 수 있습니다.

## 백엔드 실행

1. `api` 디렉토리에서 필요한 패키지를 설치합니다.
2. 로컬 서버를 실행합니다.
   `uvicorn main:app --host 0.0.0.0 --port 8000 --reload`

   http://localhost:8000에서 실행됩니다.
