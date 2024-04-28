import { styled } from "styled-components"

export const CharactersList = styled.div`
    max-width: ${(props) => props.theme.spacing.maxWidth};
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    align-items: stretch;
    gap: calc(1.5 * ${(props) => props.theme.spacing.medium});
`
export const NotFound = styled.h3`
    color: ${(props) => props.theme.colors.secondary};
    font-style: italic;
    margin: ${(props) => props.theme.spacing.default} auto;
`

export const FiltrationForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: ${(props) => props.theme.spacing.medium};
    margin: ${(props) => props.theme.spacing.default} auto;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`