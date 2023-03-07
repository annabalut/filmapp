import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
height: 50vh;
margin: 20px;
gap: 20px;

& > img {
    border-radius: 15px;
}

& > div > div > div {
font-size: 36px;
font-weight: 800;
}

& > div > div > p {
    font-size: 24px;
    font-weight: 400;
}
`

export const Rating = styled.div`
display: flex;
justify-content: space-between;



& > p {
    color: red;
    font-weight: 800 !important;
}
`
