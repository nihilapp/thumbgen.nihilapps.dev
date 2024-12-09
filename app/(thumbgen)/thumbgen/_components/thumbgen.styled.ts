'use client';

import styled from 'styled-components';
import { color, size } from '@/_styles';

export const ScreenBox = styled.div`
  border: 1px solid ${color.black[200]};
  border-radius: ${size.normal[1]};
  margin-bottom: ${size.normal[5]};
`;

export const RowFlex = styled.div`
  display: flex;
  gap: ${size.normal[5]};
`;

export const ColFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size.normal[2]};
`;

export const ColorSection = styled.div``;

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${size.text.md};
  gap: ${size.normal[2]};
  min-width: 0;
`;

export const LabelTitle = styled.span`
  font-size: ${size.text.lg};
  font-weight: 700;
`;

export const Input = styled.input`
  border: 1px solid ${color.black[200]};
  border-radius: ${size.normal[1]};
  padding: ${size.normal[2]};
  outline: none;
  height: 50px;

  &:focus {
    border-color: ${color.blue[500]};
  }
`;

export const RedMessage = styled.span`
  color: ${color.red[500]};
  font-size: ${size.text.sm};
  font-weight: 900;
  font-style: italic;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${color.black.base};
  color: ${color.white};
  padding: ${size.normal[5]};
  border-radius: ${size.normal[1]};
  text-align: center;
  transition: background-color 0.2s ease;
  font-size: ${size.text.h3};
  font-weight: 900;

  &:hover {
    background-color: ${color.blue[500]};
  }
`;

interface ColorPreviewProps {
  $color: string;
}

export const ColorPreview = styled.div<ColorPreviewProps>`
  border: 1px solid ${color.black[200]};
  border-radius: ${size.normal[1]};
  height: 50px;
  background-color: ${({ $color, }) => $color};
`;
