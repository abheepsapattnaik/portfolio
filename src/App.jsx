import './App.css';
import AboutMe from "./component/AboutMe.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="relative z-0">
            <div className="bg-about ">
                <div className="bg-cover bg-center bg-no-repeat">
                    <AboutMe></AboutMe>
                </div>

            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
