import { Card } from './card'
import css from '../cards/style/cards.css'

export const Cards = () => {

    return (
        <div>
      
            <ul className="cards">
                <li> <Card></Card> </li>
                <li> <Card></Card> </li>
                <li> <Card></Card> </li>
                <li> <Card></Card> </li>
                <li> <Card></Card> </li>
            </ul>

            <ul className="cards">
                <li> <Card></Card> </li>
                <li> <Card></Card> </li>
                <li> <Card></Card> </li>
                <li> <Card></Card> </li>
                <li> <Card></Card> </li>
            </ul>
        </div>
    )
}
