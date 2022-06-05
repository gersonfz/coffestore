import styled from "styled-components"

export const Container = styled.nav`
    width: 100%;
    background-color: #a46c4c;
    height: 75px;
`

export const Wrapped = styled.div`
    width: 100%;
    max-width: 1450px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`

export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;

    svg{
        margin: 0.5rem;
    }
`

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media screen and (max-width: 960px){
        position: absolute;
        top: 75px;
        right: ${({ open }) => (open ? "0" : "-100%")};
        width: 100%;
        height: 90vh;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        transition: 0.5s all ease;
        background-color: #a46c4c;
        border-radius: 0 0 0 100%;
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
`

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1.5rem;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        background-color: #d4b5a4;
        transition: 0.5s all ease;
        color: #a46c4c;
    }
    @media screen and (max-width: 960px){
        width: 100%;
        color: black;
        &:hover{
            width: 50%;
        }
    }
`

export const BurgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        
        svg{
        margin: 0.5rem;
        }
    }


`