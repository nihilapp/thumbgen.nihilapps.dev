'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';

export const ColorItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${size.normal[1]};
  width: 100%;
  text-transform: uppercase;
`;
