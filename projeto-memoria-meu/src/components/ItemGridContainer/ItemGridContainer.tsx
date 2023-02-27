import { useState } from "react"
import * as C from "./ItemGridContainer.styled"
import interrog from "../../assets/interrogacao.svg"


export function ItemGridContainer({clicked, img, index, addFn, confFn, consolarArr}: {clicked: boolean, img: string, index: number, addFn: (pos: number /*vai ser o index*/) => void, confFn: () => void, consolarArr: () => void}){
    


    return (
        <C.Container onClick={() => {
            addFn(index)
            consolarArr()
            confFn() /*Como ele está atualizando esse elemento tbm, acaba que ele não executa o confFn*/

        }} style={{backgroundColor: clicked? "#000": "#00f"}}>
            {
                clicked? <C.Imagem src={img}></C.Imagem> : <C.Interrog src={interrog}></C.Interrog>
            }
        </C.Container>
    )
}