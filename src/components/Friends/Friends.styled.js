import styled from '@emotion/styled';

export const Wrapper = styled.section`
padding: 30px;
justify-content: space-around;
display: flex;
flex-direction: column;
@media(min-width: 768px){
    padding: 30px;
justify-content: space-around;
display: flex;
flex-direction: row;
}

`
export const FilterConractWrap = styled.div`
padding-top: 30px;
padding-left: 20px;
@media(min-width: 768px){
    padding: 0;
}
`