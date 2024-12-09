'use client';

import React, { useRef } from 'react';
import { Button, ScreenBox } from './thumbgen.styled';
import { ThumbgenScreen } from './Screen';
import { TitleSettingArea } from './TitleSettingArea';
import { ColorSettingArea } from './ColorSettingArea';
import { TextSizeSettingArea } from './TextSizeSettingArea';
import { NameSettingArea } from './NameSettingArea';
import { AdBox } from './AdBox';
import { thumbnailStore } from '@/_entities';

export function Thumbgen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { fileName, fileExtension, } = thumbnailStore();

  const onClickSaveFile = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `${fileName}.${fileExtension}`;
    link.href = canvas.toDataURL(`image/${fileExtension}`);
    link.click();
  };

  return (
    <>
      <ScreenBox>
        <ThumbgenScreen canvasRef={canvasRef} />
      </ScreenBox>

      <AdBox />

      <TitleSettingArea />
      <ColorSettingArea />
      <TextSizeSettingArea />
      <NameSettingArea />
      <Button onClick={onClickSaveFile}>썸네일 생성</Button>

      <AdBox />
    </>
  );
}
