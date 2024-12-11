import Container from '@mui/material/Container'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/HomePage';
import Story from './pages/StoryPage';
import Project from './pages/ProjectPage';
import Contact from './pages/ContactPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/story",
      element: <Story />
    },
    {
      path: "/projects",
      element: <Project />
    },
    {
      path: "/contact",
      element: <Contact />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export default App
