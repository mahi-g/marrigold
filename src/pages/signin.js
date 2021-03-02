import React from 'react';
import FormCard from '../components/card/FormCard';
import styled from '@emotion/styled';
import { theme } from '../theme';

const Form = styled.form`
    height: 450px;
    display: flex;
    flex-direction: column;
    padding: 36px;
    & > * {
        margin:  8px 24px;
    }
    & > label {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: bold;
    }
    & > p {
        font-size: ${theme.fontSize.tiny};
    }
`
const Input = styled.input`
    height: 28px;
    padding: ${theme.size.xsmall} 12px;
    border: none;
    border-radius: ${theme.size.xsmall};
`
const Button = styled.button`
        width: 86px;
        height: 32px;
        text-align: center;
        padding: ${theme.size.xsmall};
        margin: ${theme.size.medium} auto;
        border: none;
        border-radius: ${theme.size.xsmall};
        background: ${theme.colorMap.mustardYellow};
`

const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }

    return(
        <FormCard
            header = { "Vendor Sign In" }
            subtitle = { "Enter your details to continue"}
            body = {

                <Form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <Input name='email' placeholder='johndoe@email.com' type='text' required />
                    <label>Password</label>
                    <Input name='password' placeholder='password' type='password' required />
                    <Button>Sign In</Button>
                    <p>Don't have an account? Sign up as a <a href="/signup">vendor</a></p>
                </Form>
            }
        maxHeight = {'500'}
        maxWidth = {'400'}
        height = {'500'}
        width = {'380'}
        />
    );
}



export default SignIn;
