import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import MyContext from "./context/stockContext";

function App() {
  return (
    <div className="App">
      <MyContext>
        <header>
          <NavigationBar />
        </header>
        <body>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </body>
      </MyContext>
    </div>
  );
}

export default App;
