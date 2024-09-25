import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import CatList from './CatList.jsx';
import CatDetails from './CatDetails.jsx';
import Contact from './Contact.jsx';
import Layout from './Layout.jsx';
import About from './About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CatList />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about-us",
        element: <About />
      },
      {
        path: "/details/:id",
        element: <CatDetails />
      }
    ]
  }








]);

function App() {
  return (
    <RouterProvider router={router} />
  )

  /*return (
    <div className="App">
      <CatList />
    </div>
  );*/
}

export default App;
