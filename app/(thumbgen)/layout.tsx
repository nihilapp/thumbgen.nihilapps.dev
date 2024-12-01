'use client';

import React from 'react';
import styled from 'styled-components';
import { size } from '@/_styles';

interface Props {
  children?: React.ReactNode;
}

const Main = styled.main`
  padding-top: ${size.normal[5]};
  width: 1282px;
  margin: 0 auto;
`;

export default function layout({ children, }: Props) {
  return (
    <Main>{children}</Main>
  );
}
