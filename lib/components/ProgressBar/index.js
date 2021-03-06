import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

const Background = styled.div`
  position: relative;
  background: ${theme.greyLighter};
  background: ${props => (props.inverted ? theme.greyDark : theme.greyLighter)};
  height: 16px;
  border-radius: 8px;
`;

const Fill = styled.div`
  position: absolute;
  left: 3px;
  top: 3px;
  height: 10px;
  border-radius: 5px;
  animation: expandWidth 1000ms ease-in-out 1;
  transition: ${variables.defaultTransition};
  ${props =>
    props.gradient
      ? css`
          background: linear-gradient(
            to right,
            ${theme.danger} 0%,
            ${theme.warning} 50%,
            ${theme.success} 100%
          );
        `
      : props.inverted
        ? css`
            background: ${theme.primaryLight};
          `
        : css`
            background: ${theme.primaryDark};
          `};
`;

class ProgressBar extends React.Component {
  render() {
    const { containerWidth, fillWidth, gradient, inverted } = this.props;
    return (
      <Background inverted={inverted} style={{ width: containerWidth + "%" }}>
        <Fill
          gradient={gradient}
          inverted={inverted}
          style={{ width: fillWidth + "%" }}
        />
      </Background>
    );
  }
}

ProgressBar.propTypes = {
  /** Sets the percentage width of the parent container */
  parentWidth: PropTypes.number,
  /** Sets the percentage width of the fill */
  fillWidth: PropTypes.number,
  /** Changes fill to have a gradient */
  gradient: PropTypes.bool,
  /** Changes appearance to suit dark backgrounds */
  inverted: PropTypes.bool
};

/** @component */
export default ProgressBar;
