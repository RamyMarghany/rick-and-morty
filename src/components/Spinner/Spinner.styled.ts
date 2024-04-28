import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div<{ size: number }>`
 width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: inline-block;
  border: 3px solid ${(props) => props.theme.colors.secondaryText};
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.colors.error};
  animation: ${spinAnimation} 0.8s linear infinite;
  margin-top: ${(props) => props.theme.spacing.large};
`;