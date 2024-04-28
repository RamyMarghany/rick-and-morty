import styled from "styled-components";

export const StyledEpisodeWrapper = styled.div`
    padding-top: ${(props) => props.theme.spacing.default};
    text-align: left;
`

export const StyledEpisodeDetails = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${(props) => props.theme.spacing.small};
    box-shadow: -2px 3px 3px 0px ${(props) => props.theme.colors.primaryText};  
    @media (max-width: 768px) {
        flex-direction: column;
    }
`