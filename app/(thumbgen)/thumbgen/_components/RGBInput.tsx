'use client';

import React, { useCallback, useMemo } from 'react';
import {
  Input, Label, LabelTitle, RowFlex
} from './thumbgen.styled';

interface Props {
  color: string;
  // eslint-disable-next-line no-unused-vars
  setColor: (color: string) => void;
}

export function RGBInput({ color, setColor, }: Props) {
  console.log('color >> ', color);

  const [ red, green, blue, ] = useMemo(
    () => {
      if (!color) {
        return [ 0, 0, 0, ];
      }

      const hex = color.slice(1);
      const rgb = hex.match(/../g);

      if (!rgb) {
        return [ 0, 0, 0, ];
      }

      return rgb.map((x) => {
        const value = parseInt(x, 16);
        return Number.isNaN(value) ? 0 : value;
      });
    },
    [ color, ]
  );

  const onChangeColor = useCallback(
    (colorIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value === '' ? '0' : e.target.value;
      const newValue = Math.max(0, Math.min(255, parseInt(value, 10) || 0));

      const colorValues = [ red, green, blue, ];
      colorValues[colorIndex] = newValue;

      setColor(
        `#${colorValues.map((v) => v.toString(16).padStart(2, '0')).join('')}`
      );
    },
    [ red, green, blue, setColor, ]
  );

  return (
    <RowFlex className='flex-1 shrink-0 min-w-0'>
      <Label className='flex-1 shrink-0'>
        <LabelTitle>R</LabelTitle>
        <Input
          type='number'
          min={0}
          max={255}
          value={red || 0}
          onChange={onChangeColor(0)}
        />
      </Label>
      <Label className='flex-1 shrink-0'>
        <LabelTitle>G</LabelTitle>
        <Input
          type='number'
          min={0}
          max={255}
          value={green || 0}
          onChange={onChangeColor(1)}
        />
      </Label>
      <Label className='flex-1 shrink-0'>
        <LabelTitle>B</LabelTitle>
        <Input
          type='number'
          min={0}
          max={255}
          value={blue || 0}
          onChange={onChangeColor(2)}
        />
      </Label>
    </RowFlex>
  );
}
