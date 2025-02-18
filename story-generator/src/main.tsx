import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RootLayout } from './layout/layout.tsx'
import { StoryRouter } from './router/index.tsx'

import '../src/style/tailwind.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout>
      <StoryRouter />
    </RootLayout>
  </StrictMode>
)
