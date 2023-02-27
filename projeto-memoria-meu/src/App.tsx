import * as C from "./App.styles"
import { useState, useEffect } from "react"
import styles from "./App.module.css"
import {ItemInfo} from "./components/ItemInfo"
import { ItemGrid } from "./components/ItemGrid"
import { items } from "./helpers/items"

export default function App(){
  const [time, setTime] = useState(0)
  const [movimentos, setMovimentos] = useState(0)


  return (
      <C.Container>
        <C.Infos>
          <C.Title>Jogo da memória</C.Title>
          <ItemInfo label="Tempo" content="00:00"></ItemInfo>
          <ItemInfo label="Movimentos" content="0"></ItemInfo>
        </C.Infos>
        <C.JogoAreaContainer>
          <C.JogoArea>
            <ItemGrid></ItemGrid>
          </C.JogoArea>
        </C.JogoAreaContainer>
      </C.Container>
  )
}