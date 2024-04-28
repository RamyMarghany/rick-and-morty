import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledAppBar = styled.nav`
    display: flex;
    background: ${(props) => props.theme.colors.background};
    width: 100%;
    justify-content: space-around;
    height: calc(3 * ${(props) => props.theme.spacing.default});;
    align-content: center;
    align-items: center;
    position: fixed;
    box-shadow: -3px 0px 9px 0px ${(props) => props.theme.colors.primaryText};
    z-index:1;
`

export const StyledLink = styled(Link)`
    color: ${(props) => props.theme.colors.primaryText};
    font-size: ${(props) => props.theme.typography.large};
`