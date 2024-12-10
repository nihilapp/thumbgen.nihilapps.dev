'use client';

import React, { useCallback, useState } from 'react';
import {
  ColFlex, ColorPreview, Input, Label, LabelTitle, RowFlex
} from './thumbgen.styled';
import { thumbnailStore } from '@/_entities';
import { RGBInput } from './RGBInput';
import { HexSelector } from './HexSelector';
import { HexPasteModal } from './HexPasteModal';
import { SmallButton } from './SmallButton';

export function ColorSettingArea() {
  const [ openTextHexModal, setOpenTextHexModal, ] = useState(false);
  const [ openBgHexModal, setOpenBgHexModal, ] = useState(false);

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

  const onClickOpenTextHexModal = () => {
    setOpenTextHexModal(true);
  };

  const onClickOpenBgHexModal = () => {
    setOpenBgHexModal(true);
  };

  return (
    <>
      <ColFlex className='p-5 rounded-1 border border-black-200 mb-5'>
        <RowFlex className='relative'>
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
          <SmallButton
            onClick={onClickOpenBgHexModal}
          >
            값 붙여넣기
          </SmallButton>
          <RGBInput color={bgColor} setColor={setBgColor} />
        </RowFlex>
        <RowFlex className='relative'>
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
          <SmallButton
            onClick={onClickOpenTextHexModal}
          >
            값 붙여넣기
          </SmallButton>
          <RGBInput color={textColor} setColor={setTextColor} />
        </RowFlex>
      </ColFlex>

      {openTextHexModal && (
        <HexPasteModal
          open={openTextHexModal}
          setOpen={setOpenTextHexModal}
          modalType='text'
        />
      )}

      {openBgHexModal && (
        <HexPasteModal
          open={openBgHexModal}
          setOpen={setOpenBgHexModal}
          modalType='background'
        />
      )}
    </>
  );
}
