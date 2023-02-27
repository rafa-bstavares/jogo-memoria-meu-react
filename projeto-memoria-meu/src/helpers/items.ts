import konoha from "../assets/konoha.svg"
import akatsuki from "../assets/akatsuki.svg"
import anbu from "../assets/anbu.svg"
import gaara from "../assets/gaara.svg"
import kunai from "../assets/kunai.svg"
import lamen from "../assets/lamen.svg"

type Item = {nome: string, img: string}

export let items: Item[] = [
    {nome: "konoha", img: konoha},
    {nome: "akatsuki", img: akatsuki},
    {nome: "anbu", img: anbu},
    {nome: "gaara", img: gaara},
    {nome: "kunai", img: kunai},
    {nome: "lamen", img: lamen}
]