'use client';

import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Button, ScreenBox } from './thumbgen.styled';
import { ThumbgenScreen } from './Screen';
import { TitleSettingArea } from './TitleSettingArea';
import { ColorSettingArea } from './ColorSettingArea';
import { TextSizeSettingArea } from './TextSizeSettingArea';
import { NameSettingArea } from './NameSettingArea';
import { thumbnailStore } from '@/_entities';
import {
  CancelButton, Modal, ModalBack, ModalBody, ModalFooter, ModalHeader, SaveButton
} from './modal.styled';

export function Thumbgen() {
  const [ open, setOpen, ] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { fileName, fileExtension, } = thumbnailStore();

  const onClickOpenModal = () => {
    setOpen(true);
  };

  const onClickCloseModal = () => {
    setOpen(false);
  };

  const onClickModalBack = (event: React.MouseEvent<HTMLDivElement>) => {
    // 이벤트가 Modal 영역에서 발생한 경우 무시
    if (event.target !== event.currentTarget) {
      return;
    }
    setOpen(false);
  };

  const onClickSaveFile = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `${fileName}.${fileExtension}`;
    link.href = canvas.toDataURL(`image/${fileExtension}`);
    link.click();

    setOpen(false);
  };

  return (
    <>
      <ScreenBox>
        <ThumbgenScreen canvasRef={canvasRef} />
      </ScreenBox>

      <TitleSettingArea />
      <ColorSettingArea />
      <TextSizeSettingArea />
      <NameSettingArea />
      <Button
        className='mb-5'
        onClick={onClickOpenModal}
      >
        썸네일 생성
      </Button>

      {open && (
        <ModalBack onClick={onClickModalBack}>
          <Modal>
            <ModalHeader>
              <Icon
                icon='mdi:close'
                onClick={onClickCloseModal}
                className='cursor-pointer text-h1'
              />
            </ModalHeader>
            <ModalBody>
              <p>해당 설정으로 썸네일을 저장하시겠습니까?</p>
            </ModalBody>
            <ModalFooter>
              <SaveButton onClick={onClickSaveFile}>
                저장
              </SaveButton>
              <CancelButton onClick={onClickCloseModal}>
                취소
              </CancelButton>
            </ModalFooter>
          </Modal>
        </ModalBack>
      )}
    </>
  );
}
