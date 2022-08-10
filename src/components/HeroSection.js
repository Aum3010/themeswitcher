import React , {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../colors";

const HeroSection = () => {
        const theme = useContext(ThemeContext)[0]
        const currentTheme = AppTheme[theme]

        return(
            <div
            style={{
                padding: "1rem",
                textAlign:"center"
            }}>
                <h1>
                    Context API Theme Toggler
                </h1>
                <p>
                    This is a nice Paragraph
                </p>
                <button style={{
                    backgroundColor:"#26ae60",
                    padding:"10px 150px",
                    fontSize:"20px",
                    color:"#FFF",
                    border: "$currentTheme.border"
                }}>
                    Click Me!
                </button>
            </div>
        )

}


export default HeroSection;