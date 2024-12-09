'use client';

import styled from 'styled-components';
import { color, size } from '@/_styles';

export const Container = styled.div`
  user-select: none;
  min-width: 0;
  position: relative;

  & svg {
    transition: transform 0.2s ease-in-out;
  }

  &.open {
    & svg {
      transform: rotate(0deg);
    }
  }

  &.close {
    & svg {
      transform: rotate(180deg);
    }
  }
`;

export const Selection = styled.div`
  border: 1px solid ${color.black[200]};
  border-radius: ${size.normal[1]};
  padding: ${size.normal[2]};
  outline: none;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  cursor: pointer;
  transition: height 0.3s ease-in-out, margin-top 0.3s ease-in-out;
  height: 0;
  overflow-y: scroll;

  &.close {
    height: 0 !important;
  }

  &.open {
    margin-top: ${size.normal[1]};
    height: 158px;
  }
`;

export const ListItem = styled.div`
  border: 1px solid ${color.black[200]};
  border-radius: ${size.normal[1]};
  padding: ${size.normal[2]};
  background-color: ${color.white};
  height: 50px;

  &:not(:last-child) {
    margin-bottom: ${size.normal[1]};
  }
`;
