
import { Card } from "../cards/card";
import React, { useEffect, useState } from "react";
import { css } from '../cards/style/cards.css'


function FetchFunction() {

       const PokeListInitials = [
              "Bulbasaur"
              , "Charmander"
              , "Squirtle "

              , "Chikorita"
              , "Cyndaquil "
              , "Totodile "

              , "Treecko"
              , "Torchic"
              , " Mudkip "

              , "Turtwig "
              , " Chimchar"
              , " Piplup "

              , " Snivy "
              , "Tepig "
              , "Oshawott"

              , "Chespin "
              , " Fennekin "
              , " Froakie "

              , 'Rowlet'
              , ' Litten '
              , ' Popplio '

              , " Grookey "
              , "Scorbunny "
              , " Sobble "

              , "Sprigatito"
              , "Quaxly "
              , "Fuecoco"
       ];

       const [pokemonData, setPokemonData] = useState([])

       useEffect(() => {

              async function getData() {

                     try {
                            const promises = PokeListInitials.map(async (pokemon) => {

                                   const getFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                                   const response = await getFetch.json()

                                   return response
                            })

                            const resolvedPromise = await Promise.all(promises)
                            setPokemonData(resolvedPromise)


                     } catch (error) {

                            console.error('erro a pegar dados', error
                            )
                     }
              }

              getData()
       }, [])

       if (setPokemonData === 0) {

              return <h1>carregando..</h1>
       }


       return (


              <div>
                     {pokemonData.map((pokemon, index) => {


                            <Card className="card" key={index} name={pokemon.name}>
                                   <div className="picture" style={{ backgroundImage: `url(${pokemon.sprites.front_default})` }}></div>
                                   <h1 className="poke-name">{pokemon.name}</h1>

                            </Card>
                     })

                     }</div>

       )

}


export { FetchFunction }
