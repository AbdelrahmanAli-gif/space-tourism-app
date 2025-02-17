import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import DestinationPage, {
  defaultLoader as destinationDefaultLoader,
  dataLoader as destinationDataLoader,
} from "./pages/DestinationPage";
import CrewPage, {
  defaultLoader as crewDefaultLoader,
  dataLoader as crewDataLoader,
} from "./pages/CrewPage";
import TechnologyPage, {
  defaultLoader as technologyDefaultLoader,
  dataLoader as technologyDataLoader,
} from "./pages/TechnologyPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/destination",
        element: <DestinationPage />,
        loader: destinationDefaultLoader,
      },
      {
        path: "/destination/:id",
        element: <DestinationPage />,
        loader: destinationDataLoader,
      },
      {
        path: "/crew",
        element: <CrewPage />,
        loader: crewDefaultLoader,
      },
      {
        path: "/crew/:id",
        element: <CrewPage />,
        loader: crewDataLoader,
      },
      {
        path: "/technology",
        element: <TechnologyPage />,
        loader: technologyDefaultLoader,
      },
      {
        path: "/technology/:id",
        element: <TechnologyPage />,
        loader: technologyDataLoader,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
