import { useState } from 'react'
import LogoImg from '../assets/logo.png'
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap'

export const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
  <Navbar
    expand="md"
    light
  >
    <NavbarBrand href="/">
      <img src={LogoImg} width='200px' height='200px'/>
    </NavbarBrand>
    <NavbarToggler onClick={() => setOpen(!open)} />
    <Collapse isOpen={open} navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="#hit">
          How it works
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#tokenomics">
          Tokenomics
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#founders">
          Be a Founder
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#roadmap">
          Roadmap
          </NavLink>
        </NavItem>

      </Nav>
    </Collapse>
  </Navbar>
</div>
    )
}