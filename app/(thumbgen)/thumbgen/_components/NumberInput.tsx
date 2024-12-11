'use client';

import React from 'react';
import {
  HiddenNumberInput, NumberButtons, NumberDecreaseButton, NumberIncreaseButton, NumberVision
} from './number-input.styled';

interface Props {
  number: number;
  // eslint-disable-next-line no-unused-vars
  setNumber: (number: number) => void;
}

export function NumberInput({ number, setNumber, }: Props) {
  const onChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 0) {
      setNumber(value);
    }
  };

  return (
    <>
      <HiddenNumberInput />
      <NumberVision />
      <NumberButtons>
        <NumberIncreaseButton />
        <NumberDecreaseButton />
      </NumberButtons>
    </>
  );
}
