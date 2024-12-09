'use client';

import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const Ad = styled.div`
  width: 100%;
  height: 200px;
`;

export function AdBox({ children, }: Props) {
  return (
    <Ad />
  );
}
