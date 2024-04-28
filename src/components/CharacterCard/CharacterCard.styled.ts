import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCharacterCard = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    border-radius: ${(props) => props.theme.spacing.small};
    margin: ${(props) => props.theme.spacing.medium};
    padding: ${(props) => props.theme.spacing.small};
    border: 1px solid ${(props) => props.theme.colors.primaryText};
    box-shadow: -2px 1px 3px 0px ${(props) => props.theme.colors.primaryText};
    transition: all 0.2s ease-in-out;
    
    &:hover{
        transform: scale(1.1);
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.secondary};
        box-shadow: -3px 0px 9px 0px ${(props) => props.theme.colors.primaryText};
        cursor: pointer;
    }
`

export const CharacterName = styled.h4`
    color: ${(props) => props.theme.colors.primaryText};
`

export const CharacterSpecies = styled.p`
    color: ${(props) => props.theme.colors.secondaryText};
    margin: ${(props) => props.theme.spacing.small};
`

export const StyledLink = styled(Link)`
    background-color: ${(props) => props.theme.colors.primaryText};
    color: ${(props) => props.theme.colors.background};
    display: block;
    margin: ${(props) => props.theme.spacing.medium} ${(props) => props.theme.spacing.small};
    border-radius: ${(props) => props.theme.spacing.small};
    padding: ${(props) => props.theme.spacing.small};
`