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
  direction: 'row' | 'column';
  data: any[];
  state: string;
  // eslint-disable-next-line no-unused-vars
  setState: (state: string, index?: number) => void;
  id: string;
}

export function Select({
  direction, data, state, setState, id,
}: Props) {
  const [ listClassName, setListClassName, ] = useState('close');
  const divRef = useRef<HTMLDivElement>(null);

  const onClickOpen = useCallback(() => {
    const customEvent = new CustomEvent('closeOtherSelects', {
      detail: { currentId: id, },
    });
    document.dispatchEvent(customEvent);

    setListClassName((prev) => (prev === 'close' ? 'open' : 'close'));
  }, [ id, ]);

  const onClickState = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { value, } = event.currentTarget.dataset;
      if (value) {
        setState(value);
        setTimeout(() => {
          setListClassName('close');
        }, 100);
      }
    },
    [ setState, ]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!divRef.current?.contains(target)) {
        setListClassName('close');
      }
    };

    const handleCloseOtherSelects = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail.currentId !== id) {
        setListClassName('close');
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('closeOtherSelects', handleCloseOtherSelects);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('closeOtherSelects', handleCloseOtherSelects);
    };
  }, [ id, ]);

  return (
    <Container className={listClassName} $direction={direction}>
      <Selection
        onClick={onClickOpen}
        ref={divRef}
        $direction={direction}
      >
        {state}
        <ArrowIcon />
      </Selection>
      <List
        className={listClassName}
        data-type='select'
      >
        {data.map((item) => (
          <ListItem
            key={tools.common.uuid()}
            onClick={onClickState}
            data-value={item}
            className={
              state === item
                ? '!bg-black-base !border-white text-white'
                : '!bg-white !text-black-base'
            }
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
