import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Router from "./components/Router";

import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <Header />
        <div className="flex h-full">
          <Sidebar />
          <Router />
        </div>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
