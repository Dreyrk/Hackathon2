import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import "./styles/App.css";
import { CurrentUserContextProvider } from "./contexts/userContext";
import Router from "./components/Router";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarText, setSidebarText] = useState("Dashboard");

  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <div className="flex h-full">
          <Sidebar setSidebarText={setSidebarText} />
          <Router sidebarText={sidebarText} />
        </div>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
