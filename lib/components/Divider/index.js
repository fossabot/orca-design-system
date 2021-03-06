import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";

const Divider = styled.div`
  display: block;
  width: 100%;
  background: ${props =>
    props.light
      ? theme.greyLightest
      : props.inverted ? theme.greyDark.fade(0.4) : theme.greyLighter};
  height: ${props => (props.thick ? "3px;" : "1px;")};
`;

Divider.propTypes = {
  /** Divider will use a lighter grey colour */
  light: PropTypes.bool,
  /** Divider will be 3px instead of 1px */
  thick: PropTypes.bool,
  /** Divider will be a darker colour more suited for dark backgrounds */
  inverted: PropTypes.bool
};

/** @component */
export default Divider;
