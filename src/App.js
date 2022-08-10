import React , {useState} from "react";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/HeroSection";
import HeroSection from "./components/HeroSection";



const App = () => {
  const themeHook = useState("dark")
  return(
    <div>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header/>
          <HeroSection/>
        </div> 
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
