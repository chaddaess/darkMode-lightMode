import React  from "react";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";



export default function App(){
    const [darkMode,setDarkMode]=React.useState(false)
    function toggleMode(){
        setDarkMode(prevState => (
            !prevState
        ))
    }
    return(
        <div className={`container ${darkMode?"dark":""}`}>
            <div classname="content">
            <Navbar
                darkMode={darkMode}
                toggleMode={toggleMode}
            />
            <MainContent
                darkMode={darkMode}
            />
            </div>
        </div>
    )
}