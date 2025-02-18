import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../app/page'
import ArchivePage from '../app/archive/page'

const storyRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/archive/:id',
    element: <ArchivePage />,
  },
])

export const StoryRouter = () => <RouterProvider router={storyRouter} />
