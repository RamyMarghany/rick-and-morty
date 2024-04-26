import styled from "styled-components";

export const StyledApp = styled.main`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primaryText};
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`