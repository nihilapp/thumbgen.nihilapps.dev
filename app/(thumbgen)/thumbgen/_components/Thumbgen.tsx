'use client';

import React from 'react';
import { ScreenBox } from './thumbgen.styled';
import { ThumbgenScreen } from './Screen';

interface Props {
  children?: React.ReactNode;
}

export function Thumbgen({ children, }: Props) {
  return (
    <>
      <ScreenBox>
        <ThumbgenScreen />
      </ScreenBox>
    </>
  );
}
