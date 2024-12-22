
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import "./App.css";
import React from "react";
import Team from "./Components/Team/Team";
import Contact from "./Components/ContactIfo/ContactIfo";
import Invocate from "./Components/Invocate/Invocate";
import PorfileForm from "./Components/PorfileForm/PorfileForm";
import FaQ from "./Components/FaQ/FaQ";
import Calender from "./Components/Calender/Calender";
import Goegraphy from "./Components/Goegraphy/Goegraphy";
import BarChart from "./Components/BarChart/BarChart";
import Dashbord from "./Components/Dashbord/Dashbord";
import PieChart from './Components/PieChart/Piechart';
import LineChart from './Components/LineChart/LineChart';



const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashbord />} />
      <Route path="/team" element={<Team />} />
      <Route path="/bar" element={<BarChart />} />
      <Route path="/pie" element={<PieChart />} />
      <Route path="/line" element={<LineChart />} />
      <Route path="/invocate" element={<Invocate />} />
      <Route path="/form" element={<PorfileForm />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/faq" element={<FaQ />} />
      <Route path="/goegraphy" element={<Goegraphy />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
