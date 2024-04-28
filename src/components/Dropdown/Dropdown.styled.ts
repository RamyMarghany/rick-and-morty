import { styled } from "styled-components"

export const StyledDropdown = styled.div`

& select {
    border-radius: ${(props) => props.theme.spacing.small};
    margin-left: ${(props) => props.theme.spacing.small};
    text-indent: ${(props) => props.theme.spacing.small};
    height: ${(props) => props.theme.spacing.default};
    border: 1px solid ${(props) => props.theme.colors.primaryText};
}
`