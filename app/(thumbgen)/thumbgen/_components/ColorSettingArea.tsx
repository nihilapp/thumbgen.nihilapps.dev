'use client';

import React, { useCallback } from 'react';
import {
  ColFlex, ColorPreview, Input, Label, LabelTitle, RowFlex
} from './thumbgen.styled';
import { thumbnailStore } from '@/_entities';
import { RGBInput } from './RGBInput';
import { HexSelector } from './HexSelector';

export function ColorSettingArea() {
  const {
    bgColor, setBgColor, textColor, setTextColor,
  } = thumbnailStore();

  const onChangeBgColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBgColor(`${e.target.value}`);
    },
    []
  );

  const onChangeTextColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextColor(`${e.target.value}`);
    },
    []
  );

  return (
    <ColFlex className='p-5 rounded-1 border border-black-200 mb-5'>
      <RowFlex>
        <Label className='flex-[2] shrink-0'>
          <LabelTitle>배경 색상</LabelTitle>
          <Input
            type='color'
            value={bgColor}
            onChange={onChangeBgColor}
            hidden
          />
          <ColorPreview $color={bgColor} />
        </Label>
        <Label className='flex-1 shrink-0'>
          <LabelTitle>HEX</LabelTitle>
          <HexSelector color={bgColor} setColor={setBgColor} />
        </Label>
        <RGBInput color={bgColor} setColor={setBgColor} />
      </RowFlex>
      <RowFlex>
        <Label className='flex-[2] shrink-0'>
          <LabelTitle>텍스트 색상</LabelTitle>
          <Input
            type='color'
            value={textColor}
            onChange={onChangeTextColor}
            hidden
          />
          <ColorPreview $color={textColor} />
        </Label>
        <Label className='flex-1 shrink-0'>
          <LabelTitle>HEX</LabelTitle>
          <HexSelector color={textColor} setColor={setTextColor} />
        </Label>
        <RGBInput color={textColor} setColor={setTextColor} />
      </RowFlex>
    </ColFlex>
  );
}
