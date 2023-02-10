import styled from '@emotion/styled';



export const Form = styled.form`
padding: 20px;
display: flex;
flex-direction: column;
width: 300px;
border: 1px solid grey;
margin-top: 20px;
margin-left: 20px;
`;

export const Title = styled.h1`
margin-bottom: 15px`;

export const Text = styled.p`
font-size: 16px;
margin-bottom: 10px`

export const Input = styled.input`
display: inline-block;
margin-bottom: 10px;`

export const Wrapper = styled.label`
margin-bottom: 10px;`

export const Button = styled.button`
width: 120px;
height: 30px;
padding: 5px;
border-radius: 50px;
background-color: yellow;
:hover{
    background-color: green
}`