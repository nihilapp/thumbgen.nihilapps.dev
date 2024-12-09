'use client';

import React, { useCallback, useMemo } from 'react';
import { tools } from '@/_libs';
import { Select } from './Select';
import { RowFlex } from './thumbgen.styled';

interface Props {
  color: string;
  // eslint-disable-next-line no-unused-vars
  setColor: (color: string) => void;
}

const HexMap = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', ];

export function HexSelector({ color, setColor, }: Props) {
  const hex = useMemo(
    () => {
      return color.slice(1);
    },
    [ color, ]
  );

  const setHex = useCallback(
    (state: string, index: number) => {
      const newHex = [ ...hex, ];
      newHex[index] = state;

      setColor(`#${newHex.join('')}`);
    },
    [ hex, setColor, ]
  );

  return (
    <RowFlex className='!gap-1'>
      {hex.split('')
        .map((char, index) => (
          <Select
            key={tools.common.uuid()}
            data={HexMap}
            state={char.toUpperCase()}
            setState={(state) => setHex(state, index)}
          />
        ))}
    </RowFlex>
  );
}
