import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
// Pages
import App from './App.jsx'
import Schedules from './pages/schedules/index.jsx';
import Members from './pages/members/index.jsx';
import Applications from './pages/application/index.jsx';
import Projects from './pages/projects/index.jsx';
// style
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App/>),
  },
  {
    path: "project",
    element: (<Projects/>),
  },
  {
    path: "schedule",
    element: (<Schedules/>),
  },
  {
    path: "/member",
    element: (<Members/>),
  },
  {
    path: "/application",
    element: (<Applications/>),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <Route />
</RouterProvider>
)
