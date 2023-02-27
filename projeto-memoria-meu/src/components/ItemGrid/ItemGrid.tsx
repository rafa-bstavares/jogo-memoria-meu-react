import { useEffect, useState } from "react"
import * as C from "./ItemGrid.styles"
import { items } from "../../helpers/items"
import { ItemGridContainer } from "../ItemGridContainer"

type ItemGrid = {img: string}
type ItemTela = {img: string, posItems: number, index: number, clicked: boolean, lastClicked: boolean}


export function ItemGrid(){
    const [itemsTela, setItemsTela] = useState<ItemTela[]>([])



    function verificarIguais(){
        let itemsTelaTrue = itemsTela.filter(item => item.lastClicked == true)
        alert("A função foi executada")
        if(itemsTelaTrue.length == 2){
            alert("O primeiro if foi executado")
            if(itemsTelaTrue[0].img != itemsTelaTrue[1].img){
                alert("img1 != img2")
                    let copArr2 = [...itemsTela]
                    copArr2[itemsTelaTrue[0].index].clicked = false
                    copArr2[itemsTelaTrue[1].index].clicked = false
                    setItemsTela(copArr2)
            }else{
                alert("img1 == img2")
                /* somar um contador de jogadas acertadas */
            }
            console.log(itemsTela)
            let copArr3 = [...itemsTela]
            /* o index tá sendo definido errado no for */
            copArr3[itemsTelaTrue[0].index].lastClicked = false
            copArr3[itemsTelaTrue[1].index].lastClicked = false
            setItemsTela(copArr3)
        }
    }

    function addClicked(posTela: number){

        let copArr = [...itemsTela]
        copArr[posTela].clicked = true
        copArr[posTela].lastClicked = true
        setItemsTela(copArr)
    }

    function consolarArr(){
        console.log(itemsTela)
        console.log(itemsTela.filter(item => item.lastClicked == true).length)
        console.log(itemsTela)
    }



useEffect(() => {
for(let i = 0; i < ((items.length) * 2); i++){
    let posItems = Math.floor(Math.random() * (items.length))
    while(itemsTela.filter(item => item.posItems == posItems).length > 1){
        posItems = Math.floor(Math.random() * (items.length))
        alert(i)
    }
    setItemsTela([...itemsTela, {img: items[posItems].img, posItems, index: i, 
        clicked: false, lastClicked: false}])
    }
}, [])

    return (
        <>
            { 
                itemsTela.map((item, index) => (
                <ItemGridContainer key={index} clicked={item.clicked} img={item.img} index={index} addFn={addClicked} confFn={verificarIguais} consolarArr={consolarArr}></ItemGridContainer>
            ))
            }
        </>
        
        )
}