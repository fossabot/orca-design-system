import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

const Container = styled.button`
  position: relative;
  cursor: help;
  width: 20px;
  height: 20px;
  border: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  border-radius: 10px;
  display: block;
  color: ${props => (props.inverted ? theme.greyDarkest : theme.white)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${variables.defaultTransition};
  background: ${props => (props.inverted ? theme.white : theme.greyDarkest)};

  &:hover,
  &:focus {
    outline: 0;
    background: ${theme.primary};

    > div {
      outline: 0;
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px) translateX(0px);
    }
  }
`;

const QuestionMark = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  font-size: 1.4rem;
  font-weight: 700;
  text-indent: 1px;
`;

const Text = styled.div`
  z-index: 2;
  position: absolute;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: left;
  left: 34px;
  outline: 0;
  opacity: 0;
  padding: 8px 10px;
  pointer-events: none;
  border-radius: 2px;
  transform: translateX(10px);
  box-shadow: 0 2px 5px ${theme.greyDarkest.fade(0.7)};
  transition: ${variables.defaultTransition};
  width: ${props => (props.width ? props.width + "px" : "200px")};
  background: ${props => (props.inverted ? theme.white : theme.greyDarkest)};

  &:before {
    content: "";
    z-index: 2;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 8px 6px 0;
    border-color: transparent;
    border-right-color: ${props =>
      props.inverted ? theme.white : theme.greyDarkest};
    left: -8px;
    top: 50%;
    margin-top: -6px;
    position: absolute;
  }

  &:after {
    content: "";
    left: -34px;
    display: block;
    height: 100%;
    top: 0;
    position: absolute;
    width: 100%;
  }

  ${({ direction }) =>
    direction === "top"
      ? css`
          left: auto;
          bottom: 34px;
          transform: translateX(0) translateY(-10px);
          &:before {
            left: 50%;
            top: auto;
            margin-top: 0;
            bottom: -10px;
            margin-left: -4px;
            transform: rotate(-90deg);
          }
          &:after {
            left: 0;
            height: calc(100% + 15px);
          }
        `
      : direction === "right"
        ? css`
            /* No changes as same as default */
          `
        : direction === "bottom"
          ? css`
              left: auto;
              top: 34px;
              transform: translateX(0) translateY(10px);
              &:before {
                left: 50%;
                top: -10px;
                margin-top: 0;
                margin-left: -4px;
                transform: rotate(90deg);
              }
              &:after {
                left: 0;
                top: auto;
                bottom: 0;
                height: calc(100% + 15px);
              }
            `
          : direction === "left"
            ? css`
                left: auto;
                right: 34px;
                transform: translateX(-10px);
                &:before {
                  left: auto;
                  right: -8px;
                  transform: rotate(180deg);
                }
                &:after {
                  left: auto;
                  right: -34px;
                }
              `
            : css``};
`;

class Tooltip extends React.Component {
  render() {
    const { children, direction, width, inverted } = this.props;
    return (
      <Container inverted={inverted}>
        <QuestionMark>?</QuestionMark>
        <Text direction={direction} width={width} inverted={inverted}>
          {children}
        </Text>
      </Container>
    );
  }
}

Tooltip.propTypes = {
  /** Specifies the direction of the tooltip */
  direction: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /** Specifies the width of the tooltip in pixels */
  width: PropTypes.string,
  /** Changes appearance to suit a dark background. */
  inverted: PropTypes.bool
};

/** @component */
export default Tooltip;
