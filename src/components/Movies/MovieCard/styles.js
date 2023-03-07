import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Wrapper = styled.article`
  /* max-width: 400px; */
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  & > div > img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  & > div > div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    
  }

  & > div > h3 {
    /* position: absolute; */
    bottom: 13px;
    left: 13px;
  }
`

export const Box = styled.div`
   position: absolute;
   top: 13px;
   right: 13px;
   background-color: white;
   padding: 8px;
   border-radius: 12px;
   font-weight: 700;
   font-size: 0.8rem;
`

export const Navi = styled(Link)`
  text-decoration: none;
  color: black;
`



