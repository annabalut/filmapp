import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './styles'
import logo from '../../assets/logo-01.png'

const Header = () => {
  return (
    <Styled.Nav>
      <div>
        <img src={logo} />
        <div>
          <p>movie</p>
          <p>maker</p>
          </div>
      </div>
      <p>
        <Styled.NavLinks to=''>Films</Styled.NavLinks>
        <Styled.NavLinks to=''>TV Series</Styled.NavLinks>
        <Styled.NavLinks to='/search'>Search</Styled.NavLinks>
      </p>
    </Styled.Nav>
  )
}

export default Header
