import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import { TextField } from '@mui/material';
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import logo from '../assets/logo.png';
import {useAuth} from "../contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {currentUser, login, setError} = useAuth();

    useEffect(() => {
        if (currentUser) {
            navigate("/home");
        }
    }, [currentUser, navigate]);

    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/home");
        } catch (e) {
            setError("Failed to login");
        }

        setLoading(false);
    }

    return (
        <Container>
            <LeftContainer>
                <Heading>Let’s get started!</Heading>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </Description>
            </LeftContainer>

            <RightContainer>
                <img src={logo} width="50%" alt="logo"/>

                <form autoComplete="off" onSubmit={handleFormSubmit}>
                    <h2>Login Form</h2>
                    <TextField
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        variant="outlined"
                        color="secondary"
                        type="email"
                        sx={{mb: 3}}
                        fullWidth
                        value={email}
                    />
                    <TextField
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        variant="outlined"
                        color="secondary"
                        type="password"
                        value={password}
                        fullWidth
                        sx={{mb: 3}}
                    />
                    <Button disabled={loading}
                            variant="outlined" color="secondary" type="submit">Login</Button>

                </form>
                <small>Need an account?
                    <Link to="/register">Register here</Link>
                </small>
            </RightContainer>
        </Container>
    )
}
export default Login;

const Container = styled.div`
  margin-left: -8px; //index.html which apparent is required for npm build creates a 8px by 8px div. This negates that */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

const LeftContainer = styled.div`
  background: #154D55;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  justify-content: center;
`;

const RightContainer = styled.div`
  background: #FCFCFC;
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
`;

const Heading = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  margin-left: 20px;
  color: #FFFFFF;
`;

const Description = styled.div`
  margin-left: 20px;
  font-family: 'Overpass', sans-serif;;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #FCFCFC;
  width: 600px;
`;