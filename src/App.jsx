import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="destination" element={<DestinationPage />}>
              <Route path=":id" element={<DestinationPage />} />
            </Route>
            <Route path="crew" element={<CrewPage />}>
              <Route path=":id" element={<CrewPage />} />
            </Route>
            <Route path="technology" element={<TechnologyPage />}>
              <Route path=":id" element={<TechnologyPage />} />
            </Route>
          </Route>
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
