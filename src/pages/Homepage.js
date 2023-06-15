import React from 'react';
import styled from "styled-components";
import {useAuth} from "../contexts/AuthContext";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
    const {currentUser} = useAuth();

    console.log(currentUser)
    return (
        <Container>
            <Sidebar/>
            <Content>
                Hello, {currentUser.email}
            </Content>
        </Container>
    )
}
export default Homepage;

const Container = styled.div`
  margin-left: -8px; //index.html which apparent is required for npm build creates a 8px by 8px div. This negates that */
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Content = styled.div`
  position: absolute;
  left: 118px;
  top: -946px;
`;