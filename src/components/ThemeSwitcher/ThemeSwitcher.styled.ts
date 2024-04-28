import styled from "styled-components";

export const StyledToggleButton = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 30px;
  height: 24px;
  transition: .2s;
  width: 56px;
  border-radius: calc(1.5 * ${(props) => props.theme.spacing.medium});
  position: relative;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primaryText};
  outline: none;

  .track-dark-check{
    left: 8px;
    transition: opacity .25s;
    width: 14px;
    bottom: 0;
    height: 10px;
    margin: auto 0;
    top: 0;
    position: absolute;

    .toggle-dark-icon{
        align-items: center;
        display: flex;
        height: 10px;
        justify-content: center;
        width: 10px;
    }
  }

  .track-light-check{
    bottom: 0;
    height: 10px;
    margin: auto 0;
    top: -12px;
    position: absolute;
    right: 12px;
    width: 10px;
    transition: opacity .25s;

    .toggle-light-icon{
        align-items: center;
        display: flex;
        height: 10px;
        justify-content: center;
        width: 10px;
    }
  }

  .slider {
    background-color: ${(props) => props.theme.colors.primaryText};
    border: 1px solid ${(props) => props.theme.colors.background};
    border-radius: 50%;
    height: 22px;
    left: 1px;
    position: absolute;
    top: 0px;
    transition: .25s;
    width: 22px;
  }

  &.dark .slider {
    transform: translateX(30px);
  }

  &:hover{
   .slider{
    border: 1px solid ${(props) => props.theme.colors.primary};
   }
  }

`
