'use client';

import styled from 'styled-components';
import { color, size } from '@/_styles';

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 400px;
  background-color: ${color.white};
  border-radius: ${size.normal[1]};
  padding: ${size.normal[2]};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ModalBody = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: ${size.text.lg};
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${size.normal[1]};
`;

export const SaveButton = styled.button`
  flex: 1;
  height: 50px;
  background-color: ${color.black.base};
  transition: background-color 0.2s ease-in-out;
  color: ${color.white};

  &:hover {
    background-color: ${color.blue[500]};
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  height: 50px;
  background-color: ${color.white};
  border: 1px solid ${color.black.base};
  transition: background-color 0.2s ease-in-out,
  color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  color: ${color.black.base};

  &:hover {
    background-color: ${color.red[500]};
    color: ${color.white};
    border-color: ${color.red[500]};
  }
`;
