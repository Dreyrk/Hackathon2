import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import { CurrentUserContextProvider } from "./contexts/userContext";
import Router from "./components/Router";
import Sidebar from "./components/Sidebar";
import { TicketContextProvider } from "./contexts/interventionTicketContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <TicketContextProvider>
          <Header />
          <div className="flex h-full">
            <Sidebar />
            <Router />
          </div>
        </TicketContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
