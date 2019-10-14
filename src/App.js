import React from "react";
import IndexPage from "./pages/top/Index.page";
import "./App.css";
import { IntlProvider } from "react-intl";

function App() {
  return (
    <div className="App">
      <IntlProvider>
        <IndexPage />
      </IntlProvider>
    </div>
  );
}

export default App;
