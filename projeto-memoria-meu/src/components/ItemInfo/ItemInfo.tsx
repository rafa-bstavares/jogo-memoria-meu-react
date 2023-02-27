import * as C from "./styles"

type Props = {
    label: string,
    content: string
}

export function ItemInfo({label, content}: Props){
    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Content>{content}</C.Content>
        </C.Container>
    )
}