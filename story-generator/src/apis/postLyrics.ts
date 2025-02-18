const postLyrics = async (prompt: string) => {
  const requestData = {
    prompt: prompt,
  }

  try {
    const response = await fetch(`http://localhost:8000/emotion/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default postLyrics
