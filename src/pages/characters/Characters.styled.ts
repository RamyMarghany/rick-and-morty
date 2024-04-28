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