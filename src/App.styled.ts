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

export const StyledAppWrapper = styled.section`
    max-width: ${(props) => props.theme.spacing.maxWidth};
    margin: 0 auto;
    padding-top: calc(4 * ${(props) => props.theme.spacing.default});
    padding-bottom: ${(props) => props.theme.spacing.default};
`