import React,{ useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { css } from './style-Bt-standard/button.css'

export  const Button = (props)=>{

    const { theme } = useContext(ThemeContext)

    return(
        <button className="button-standard" {...props} style={{color: theme.color, backgroundColor: theme.background, border: theme.border}}/>
    )
}
