import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    /* max-width: 1600px;
    width: 95%; */
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 40px;
    background-color: black;
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 40px;
    z-index: -2;
    align-items: center;

& > p {
    display: flex;
    justify-content: flex-end;
    gap: 60px;
}

& > div >img {
    height: 40px;
    margin-left: 40px;
}

& > div > div > p {
    color: antiquewhite;

}

& > div > div > p {
    font-weight: 500;
    font-size: 20px;
    line-height: 60%;
}

& > div {
    display: flex;
    align-items: center;
    gap: 15px;
}

`
export const NavLinks = styled(Link)`
    color: antiquewhite;
    text-decoration: none;
`