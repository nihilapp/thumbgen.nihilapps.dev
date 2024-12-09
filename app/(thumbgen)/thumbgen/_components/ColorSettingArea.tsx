'use client';

import React, { useCallback } from 'react';
import {
  ColFlex, ColorPreview, Input, Label, LabelTitle, RowFlex
} from './thumbgen.styled';
import { thumbnailStore, type ThumbnailState } from '@/_entities';
import { RGBInput } from './RGBInput';
import { HexSelector } from './HexSelector';

interface Props {
  children?: React.ReactNode;
}

export function ColorSettingArea({ children, }: Props) {
  const {
    bgColor, setBgColor, textColor, setTextColor, setIsDisabled,
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

  const setSelection = useCallback(
    (
      setColor: ThumbnailState['setBgColor'],
      setIsDisabled: ThumbnailState['setIsDisabled']
    ) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      let { value, } = input;
      const selectionStart = input.selectionStart ?? 0;
      const selectionEnd = input.selectionEnd ?? 0;

      if (value.length < 7) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }

      requestAnimationFrame(() => {
        setColor(value.slice(0, 7));
        // input이 HTMLInputElement인지 확인 후 setSelectionRange 호출
        if (input instanceof HTMLInputElement) {
          setTimeout(() => {
            input.setSelectionRange(selectionStart, selectionEnd);
          }, 0);
        }
      });
    },
    []
  );

  const onChangeHexCode = useCallback(
    setSelection(setBgColor, setIsDisabled),
    [ setBgColor, setIsDisabled, ]
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
          <span className='flex flex-row items-center flex-1 shrink-0'>
            <span className='text-[200%] mr-1 -mt-2 font-900'>
              #
            </span>
            <Input
              type='text'
              value={textColor.slice(1).toUpperCase()}
              onChange={onChangeTextColor}
              className='flex-1 shrink-0 min-w-0'
            />
          </span>
        </Label>
        <RGBInput color={textColor} setColor={setTextColor} />
      </RowFlex>
    </ColFlex>
  );
}
