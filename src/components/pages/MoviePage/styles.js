import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
padding: 20px;

& > div {
    display: flex;
    gap: 30px;
    width: 80vw;
}

& > div > img {
    border-radius: 15px;
    height: 80vh;
}

& > div > div {
    margin-right: 70px;
}

& > div > div > div {
 display: flex;
 justify-content: space-between;
 font-size: 20px;
}

& > div > div > h1 {
    font-size: 40px;
    margin-top: 0px;
}

& > div > div > h4 {
    font-size: 20px;
    font-style: italic;
    margin-top: 0px;
    margin-bottom: 0px;
}

& > div > div > p {
    display: flex;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    margin-top: 0px;
}


`

export const NaviLink = styled(Link)`
color: darkgray;
font-size: 14px;
`