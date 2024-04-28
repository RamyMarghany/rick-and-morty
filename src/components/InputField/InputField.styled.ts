import { styled } from "styled-components"

export const StyledInput = styled.input`
    border-radius: ${(props) => props.theme.spacing.small};
    margin-left: ${(props) => props.theme.spacing.small};
    text-indent: ${(props) => props.theme.spacing.small};
    height: ${(props) => props.theme.spacing.default};
    border: 1px solid ${(props) => props.theme.colors.primaryText};
`