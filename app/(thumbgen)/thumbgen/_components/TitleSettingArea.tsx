'use client';

import React, { useCallback } from 'react';
import {
  ColFlex, Input, Label, LabelTitle, RowFlex
} from './thumbgen.styled';
import { thumbnailStore } from '@/_entities';

interface Props {
  children?: React.ReactNode;
}

export function TitleSettingArea({ children, }: Props) {
  const {
    title, setTitle, seriesNumber, setSeriesNumber, subtitle, setSubtitle,
  } = thumbnailStore();

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const onChangeSeriesNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSeriesNumber(e.target.value);
    },
    []
  );

  const onChangeSubtitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSubtitle(e.target.value);
    },
    []
  );

  return (
    <ColFlex className='p-5 rounded-1 border border-black-200 mb-5'>
      <RowFlex>
        <Label htmlFor='title' className='flex-1 shrink-0'>
          <LabelTitle>제목</LabelTitle>
          <Input
            type='text'
            id='title'
            value={title}
            onChange={onChangeTitle}
          />
        </Label>

        <Label htmlFor='series-number'>
          <LabelTitle>번호</LabelTitle>
          <Input
            type='number'
            id='series-number'
            value={seriesNumber}
            onChange={onChangeSeriesNumber}
          />
        </Label>
      </RowFlex>

      <Label htmlFor='subtitle'>
        <LabelTitle>부제목 (선택사항)</LabelTitle>
        <Input
          type='text'
          id='subtitle'
          value={subtitle}
          onChange={onChangeSubtitle}
        />
      </Label>
    </ColFlex>
  );
}
