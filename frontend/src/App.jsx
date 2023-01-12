import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import { CurrentUserContextProvider } from "./contexts/userContext";
import Router from "./components/Router";
import Sidebar from "./components/Sidebar";

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
