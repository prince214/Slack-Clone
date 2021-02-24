import React from 'react'
import styled from "styled-components";

function Login() {
    return (
        <Container>
            Login Page
        </Container>
    )
}

export default Login

const Container = styled.div`
    background: ${props => props.theme.chatPageColor};
    color: ${props => props.theme.chatTextColor};
`;