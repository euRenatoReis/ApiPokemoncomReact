import React,{useContext} from "react"
import { ThemeContext } from "../contexts/theme-context"


export const Card = ({ children }) => {

    const { theme } = useContext(ThemeContext)
    
    return (
        <div className="card" style={{color: theme.color, backgroundColor: theme.background, border: theme.border}}>
            {children}
        </div>
    )
}