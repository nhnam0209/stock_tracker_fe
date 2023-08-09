import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <body>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </body>
    </div>
  );
}

export default App;
