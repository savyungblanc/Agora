/** @jsx jsx */
import React, { useState, useEffect, forwardRef } from 'react'
import { css, jsx } from '@emotion/core'
import netflixLogo from '../img/Logos/AgoraNu2.png'
import Icon from './Icon'

const leftLinks = ['Welcome', 'To', 'Agora',]

/**
 * @function Navbar
 */
const Navbar = forwardRef((props, ref) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      window.pageYOffset > 75 ? setScrolled(true) : setScrolled(false)

    const onScroll = window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav
      ref={ref}
      css={[
        NavbarCSS,
        scrolled
          ? css`
              background-color: rgb(20, 20, 20);
              background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.7) 10%,
                rgba(0, 0, 0, 0)
              );
            `
          : css`
              background: black;
            `
      ]}
    >
      <ul>
        <li>
          <a href="/">
            <img height="150" src={netflixLogo} />
          </a>
        </li>

        {leftLinks.map(link => (
          <li key={link}>
            <a href="https://www.youtube.com/watch?v=Xak8aGTgMTo">{link}</a>
          </li>
        ))}
      </ul>

      <ul className="right">
        <li>
          <Icon type="search" />
        </li>
        <li>
          <Icon type="bell-o" />
        </li>
      </ul>
    </nav>
  )
})

const NavbarCSS = css`
  position: fixed;
  height: 125px;
  z-index: 99;
  width: 100%;
  padding: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 30px;
  }
  a {
    font-size: 35px;
    letter-spacing: 4px;
    color: #e5e5e5;
  }
  a.active {
    color: white;
    font-weight: 500;
  }
  ul.right {
    .Icon {
      color: white;
      cursor: pointer;
      font-size: 22px;
    
    }
  }
`

export default Navbar
