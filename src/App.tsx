import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
