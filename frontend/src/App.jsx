import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles/App.css";
import { CurrentUserContextProvider } from "./contexts/userContext";
import Router from "./components/Router";
import Sidebar from "./components/Sidebar";
import { TicketContextProvider } from "./contexts/interventionTicketContext";

function App() {
  const [sidebarText, setSidebarText] = useState("Dashboard");

  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <TicketContextProvider>
          <div className="flex h-full">
            <Sidebar setSidebarText={setSidebarText} />
            <Router sidebarText={sidebarText} />
          </div>
        </TicketContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
