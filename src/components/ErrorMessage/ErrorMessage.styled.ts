import { styled } from "styled-components"

export const ErrorMessageWrapper = styled.div`
    border: 1px solid ${(props) => props.theme.colors.error};
    color: ${(props) => props.theme.colors.error};
    padding: ${(props) => props.theme.spacing.default};
    margin: ${(props) => props.theme.spacing.large} auto;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: ${(props) => props.theme.spacing.medium};
    box-shadow: -1px 6px 9px 0px ${(props) => props.theme.colors.primaryText};
`