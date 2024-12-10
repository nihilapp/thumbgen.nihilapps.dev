'use client';

import styled from 'styled-components';
import { color, size } from '@/_styles';

export const SmallButton = styled.button`
  display: inline-block;
  font-size: ${size.text.xs};
  background-color: ${color.black.base};
  color: ${color.white};
  padding: ${size.normal[2]} ${size.normal[3]};
  border-radius: ${size.normal[1]};
  cursor: pointer;
  font-weight: 500;
  position: absolute;
  top: 0;
  right: 320px;
  z-index: 10;

  &:hover {
    background-color: ${color.blue[500]};
  }
`;
