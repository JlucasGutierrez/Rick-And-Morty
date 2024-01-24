import {Routes, Route, useLocation} from "react-router-dom"
import Landing from "./view/landing/landing"
import Home from "./view/home/home";
import Detail from "./view/detail/detail";

function App() {

  const{pathname}= useLocation();

  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Landing />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/detail" element={ <Detail />} />
      </Routes>
    </div>
  )
}

export default App
