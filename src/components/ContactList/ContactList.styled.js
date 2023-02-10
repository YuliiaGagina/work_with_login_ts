import styled from '@emotion/styled';


export const Title = styled.h2`
margin-bottom: 15px;
padding-top: 15px;
padding-bottom: 15px;
margin-left: 50px;
`;

export const List = styled.ul`
margin-left: 50px;
width: 200px;
height: auto;
border-left: 1px solid grey;

`

export const Item = styled.li`
padding: 10px;
&:nth-of-type(2n){
    background-color: grey;
}`