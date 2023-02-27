import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    max-width: 85em;
    width: 100%;
    margin: 2rem auto;
`

export const Infos = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const JogoAreaContainer = styled.div`
    flex: 1;
`

export const Title = styled.div`
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
`

export const JogoArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 10rem);
    gap: 1rem;
`


