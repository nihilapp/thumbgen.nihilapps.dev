'use client';

import styled from 'styled-components';
import { color, size } from '@/_styles';

interface ColorPannelProps {
  $color: string;
}

export const ColorPannel = styled.div<ColorPannelProps>`
  width: 30px;
  height: 30px;
  border-radius: ${size.normal[1]};
  background-color: ${({ $color, }) => $color};
  border: 1px solid ${color.black[400]};
  cursor: pointer;
`;
