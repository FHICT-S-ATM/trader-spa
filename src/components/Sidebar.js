import React from 'react';
import styled from "styled-components";

const Sidebar = () => {
    return (
        <Container>


            <nav className="nav__cont">
                <ul className="nav">
                    <li className="nav__items">
                        <a href="/home">Home</a>
                    </li>

                    <li className="nav__items">
                        <a href="">Strategy</a>
                    </li>

                    <li className="nav__items">
                        <a href="">Runners</a>
                    </li>

                    <li className="nav__items">
                        <a href="/logout">Logout</a>
                    </li>

                </ul>
            </nav>


        </Container>
    )
}
export default Sidebar;

const Container = styled.div`
  position: relative;
  left: 0;
`;