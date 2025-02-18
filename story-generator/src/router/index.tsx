import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../app/home'

const storyRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])

export const StoryRouter = () => <RouterProvider router={storyRouter} />
