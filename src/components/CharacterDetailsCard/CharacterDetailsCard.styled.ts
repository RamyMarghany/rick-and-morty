import styled from "styled-components";

export const StyledMainDetails = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    gap: ${(props) => props.theme.spacing.medium};
    box-shadow: 0px 1px 5px 1px ${(props) => props.theme.colors.primaryText};
    padding: ${(props) => props.theme.spacing.medium};
    margin: ${(props) => props.theme.spacing.default} auto;
    & img{
        border-radius: ${(props) => props.theme.spacing.small};
        max-width: 100%;
        height: auto;
    }
    & b{
        display:block;
        margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        
        & img{
            border-radius: 50%;
            padding: ${(props) => props.theme.spacing.medium};
        }
    }
`