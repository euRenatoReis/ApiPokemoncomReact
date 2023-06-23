
import React,{ useContext } from "react"
import { Button } from "../buttons/button-theme/button"
import { ThemeContext, themes } from "../contexts/theme-context"

export const ToggleButton = ()=>{

    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <div>
            <Button onClick={()=> setTheme(theme === themes.light ? themes.dark : themes.light)}></Button>
        </div>
    )
}