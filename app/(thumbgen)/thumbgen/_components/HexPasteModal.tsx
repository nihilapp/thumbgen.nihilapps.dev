'use client';

import React, { useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import {
  CancelButton,
  Modal, ModalBack, ModalBody, ModalFooter, ModalHeader,
  SaveButton
} from './modal.styled';
import { Input, Label, LabelTitle } from './thumbgen.styled';
import { thumbnailStore } from '@/_entities';

interface Props {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
  modalType: 'text' | 'background';
}

export function HexPasteModal({ open, setOpen, modalType, }: Props) {
  const [ hex, setHex, ] = useState('');
  const { setTextColor, setBgColor, } = thumbnailStore();

  const typeString = useMemo(() => {
    return modalType === 'text' ? '텍스트' : '배경';
  }, [ modalType, ]);

  const onChangeHex = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHex(event.target.value);
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

  const onSaveColorHex = () => {
    if (modalType === 'text') {
      setTextColor(`#${hex}`);
    } else {
      setBgColor(`#${hex}`);
    }

    setOpen(false);
  };

  return (
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
          <Label>
            <LabelTitle>{typeString} HEX 설정</LabelTitle>
            <Input
              type='text'
              value={hex}
              onChange={onChangeHex}
            />
          </Label>
        </ModalBody>
        <ModalFooter>
          <SaveButton onClick={onSaveColorHex}>
            설정
          </SaveButton>
          <CancelButton onClick={onClickCloseModal}>
            취소
          </CancelButton>
        </ModalFooter>
      </Modal>
    </ModalBack>
  );
}
