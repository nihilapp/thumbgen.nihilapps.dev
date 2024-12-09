'use client';

import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import {
  Container, List, ListItem, Selection
} from './select.styled';
import { tools } from '@/_libs';
import { ArrowIcon } from './ArrowIcon';

interface Props {
  data: any[];
  state: string;
  // eslint-disable-next-line no-unused-vars
  setState: (state: string, index?: number) => void;
}

export function Select({
  data, state, setState,
}: Props) {
  const [ listClassName, setListClassName, ] = useState('close');
  const divRef = useRef<HTMLDivElement>(null);

  const onClickOpen = useCallback(() => {
    setListClassName((prev) => (prev === 'close' ? 'open' : 'close'));
  }, []);

  const onClickState = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { value, } = event.currentTarget.dataset;
      if (value) {
        setState(value);
        setListClassName('close');
      }
    },
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // data-type이 'select'인 요소를 클릭한 경우 무시
      if (target.closest('[data-type="select"]')) {
        return;
      }

      // 그 외의 영역 클릭시 리스트 닫기
      setListClassName('close');
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Container className={listClassName}>
        <Selection onClick={onClickOpen} ref={divRef}>
          {state}
          <ArrowIcon />
        </Selection>
        <List className={listClassName} data-type='select'>
          {data.map(
            (item) => (
              <ListItem
                key={tools.common.uuid()}
                onClick={onClickState}
                data-value={item}
                data-type='select'
                className={(
                  state === item
                    ? '!bg-black-base !border-black-base text-white'
                    : ''
                )}
              >
                {item}
              </ListItem>
            )
          )}
        </List>
      </Container>
    </>
  );
}
