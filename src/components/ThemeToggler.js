import React , {useContext} from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggler = () => {
        const [themeMode ,setthemeMode] = useContext(ThemeContext)

        return(
            <div onClick={()=>{
                setthemeMode(themeMode==="light"?"dark":"light")
            }}>
                        <span>
                            {themeMode==="light" ? "Turn OFF":"Lights ON"}
                        </span>
            </div>
        )

}


export default ThemeToggler;