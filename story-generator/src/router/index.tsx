import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../app/home'
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
