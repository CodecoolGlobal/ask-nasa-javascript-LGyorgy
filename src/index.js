import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
import Root from './routes/Root';
import APoD from './routes/APoD';
import Gallery from './routes/Gallery';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            index: true,
            element: <APoD />
        },
        {
            path: "apod",
            element: <APoD />
        },
        {
            path: "gallery",
            element: <Gallery />
        },
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
