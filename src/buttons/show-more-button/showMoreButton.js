import React, {useContext} from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import {css} from './style-BtShowMore/showMoreButton.css'

export const BtShowMore = (props)=>{

    const {theme} = useContext(ThemeContext)

    return(
        <button className="show-more-button" {...props} style={{color: theme.color, backgroundColor: theme.background, border: theme.border}}>Show More</button>
    )
}