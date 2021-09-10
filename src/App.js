import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ArticleProvider } from "./Provider/ArticleProvider";
import Routers from "./Routers";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <ArticleProvider>
        <Routers />
      </ArticleProvider>
    </BrowserRouter>
  );
}

export default App;
