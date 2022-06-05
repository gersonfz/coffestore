import styled from "styled-components"

export const Container = styled.nav`
    width: 100%;
    background-color: #a46c4c;
    height: 75px;
`

export const Wrapped = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`

export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
    a{
        font-family: 'Dancing Script', cursive;
        text-decoration: none;
        color: black;
    }
    

    svg{
        margin: 0.5rem;
    }
`
export const ContainerMenu = styled.div`
    display: flex;
    justify-content: center;
    height: 75px;

`

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    list-style: none;

    @media screen and (max-width: 960px){
        position: absolute;
        top: 75px;
        right: ${({ open }) => (open ? "0" : "-100%")};
        width: 100%;
        height: 50vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: 0.5s all ease;
        background-color: #a46c4c;
        border-radius: 0 0 0 70%;
    }
`

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1rem;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;
    text-decoration: none;

    &:hover{
        background-color: #d4b5a4;
        transition: 0.5s all ease;
        color: #a46c4c;
    }
    @media screen and (max-width: 960px){
        width: 100%;
        &:hover{
            width: 50%;
        }
    }
    }
`

export const BurgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        justify-content: end;
        align-items: center;
        
        svg{
        margin: 0.5rem;
        }
    }
`

