
import {createContext, useState} from 'react'

export const themes = {

     light: { color: 'black', background: 'gray', border: 'black'},
     dark: { color: 'white', background: 'black', border: 'white'}
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props)=>{

    const [ theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}