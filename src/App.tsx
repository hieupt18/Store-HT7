import React from "react";
import "./App.css";
import { renderOfflineRoutes, renderOnlineRoutes } from "./Routes";

function App() {
  const isAuthenticate = false;

  if (!isAuthenticate) {
    return renderOfflineRoutes();
  }

  return renderOnlineRoutes();
}

export default App;
