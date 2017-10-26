// Quick little try to see if I can eventually makes this into a nice React lib.

import styled from 'styled-components';
import * as colors from '../../styles/colors'

const PrimaryButton = styled.button`
  background: ${({ bgColor })  => colors[bgColor]};
  color: ${({ fontColor })  => colors[fontColor]};
`;

PrimaryButton.defaultProps = {
  bgColor: 'SuccessGreen',
  Color: 'White'
}
export default PrimaryButton;