import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledAppBar = styled.div`
    display: flex;
    background: ${(props) => props.theme.colors.background};
    width: 100%;
    justify-content: space-around;
    height: 50px;
    align-content: center;
    align-items: center;
    position: fixed;
    box-shadow: -3px 0px 9px 0px ${(props) => props.theme.colors.primaryText};
`

export const StyledLink = styled(Link)`
    color: ${(props) => props.theme.colors.primaryText};
    font-size: ${(props) => props.theme.typography.large};
`