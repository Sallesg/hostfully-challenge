import { Router } from "@app/Router/Router";
import { BrowserRouter } from "react-router-dom";
import "@views/styles/index.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
