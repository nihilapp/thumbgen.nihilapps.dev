'use client';

import React, { useCallback } from 'react';
import styled from 'styled-components';
import {
  ColFlex, Input, Label, LabelTitle, RowFlex
} from './thumbgen.styled';
import { thumbnailStore } from '@/_entities';
import { color } from '@/_styles';

interface Props {
  children?: React.ReactNode;
}

const Slider = styled(Input)`
  border: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #000000;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${color.white};
    cursor: pointer;
    border: 5px solid ${color.black.base};
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    background: ${color.black.base};
    border-radius: 5px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 10px;
    background: ${color.black[500]};
    border-radius: 5px;
  }

  &:focus {
    outline: none;
  }
`;

export function TextSizeSettingArea({ children, }: Props) {
  const {
    titleFontSize, setTitleFontSize, subtitleFontSize, setSubtitleFontSize,
  } = thumbnailStore();

  const onChangeTitleFontSize = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitleFontSize(
        Number(e.target.value)
      );
    },
    [ setTitleFontSize, ]
  );

  const onChangeSubtitleFontSize = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSubtitleFontSize(
        Number(e.target.value)
      );
    },
    [ setSubtitleFontSize, ]
  );

  return (
    <ColFlex className='p-5 rounded-1 border border-black-200 mb-5'>
      <RowFlex className='items-end'>
        <Label className='flex-1 shrink-0'>
          <LabelTitle>제목 폰트 크기(rem)</LabelTitle>
          <Slider
            type='range'
            min='1'
            max='8'
            step='0.125'
            value={titleFontSize}
            onChange={onChangeTitleFontSize}
            className=''
          />
        </Label>
        <Input
          type='number'
          min='1'
          max='8'
          step='0.125'
          value={titleFontSize}
          onChange={onChangeTitleFontSize}
        />
      </RowFlex>
      <RowFlex className='items-end'>
        <Label className='flex-1 shrink-0'>
          <LabelTitle>부제목 폰트 크기 (rem)</LabelTitle>
          <Slider
            type='range'
            min='0.5'
            max='4'
            step='0.125'
            value={subtitleFontSize}
            onChange={onChangeSubtitleFontSize}
            className=''
          />
        </Label>
        <Input
          type='number'
          min='0.5'
          max='4'
          step='0.125'
          value={subtitleFontSize}
          onChange={onChangeSubtitleFontSize}
        />
      </RowFlex>
    </ColFlex>
  );
}
