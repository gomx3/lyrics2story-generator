from pydantic import BaseModel

class LyricsInput(BaseModel):
    prompt: str

class StoryOutput(BaseModel):
    generated_story: str
