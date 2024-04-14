import React from "react"
import '../css/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/bx/bx-search';


class Header extends React.Component {
    render() {
      return (
        <header id="begin" className="menu">
        <Navbar expand="lg">
            <div className="container-fluid">
            <Navbar.Brand className="logo" href="index.html">REACT</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="mx-auto navik">
                <Nav.Link href="#begin">Начало</Nav.Link>
                <Nav.Link href="#middle">Середина</Nav.Link>
                <Nav.Link href="#end">Конец</Nav.Link>
                </Nav>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Я ищу..." aria-label="Search" />
                <button className="btn knopa" type="submit"><Icon icon={searchIcon} /></button>
                </form>
            </Navbar.Collapse>
            </div>
        </Navbar>
        </header>
      )
    }


}

export default Header