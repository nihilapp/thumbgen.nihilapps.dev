'use client';

import React, { useCallback, useEffect } from 'react';
import {
  ColFlex, Input, Label, LabelTitle, RedMessage, RowFlex
} from './thumbgen.styled';
import { thumbnailStore } from '@/_entities';
import { Select } from './Select';

// interface Props {
//   children?: React.ReactNode;
// }

export function NameSettingArea() {
  const {
    title, seriesNumber, subtitle, fileName, setFileName, fileExtension, setFileExtension,
  } = thumbnailStore();

  const onChangeFileName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFileName(e.target.value);
    },
    [ setFileName, ]
  );

  useEffect(() => {
    const generateFileName = () => {
      let fileName = title.trim();
      if (seriesNumber) {
        fileName += ` #${seriesNumber}`;
      }
      if (subtitle) {
        fileName += ` - ${subtitle.trim()}`;
      }
      setFileName(fileName);
    };

    generateFileName();
  }, [ title, seriesNumber, subtitle, ]);

  return (
    <ColFlex className='p-5 rounded-1 border border-black-200 mb-5'>
      <RowFlex>
        <Label className='flex-[3]'>
          <LabelTitle>파일 이름</LabelTitle>
          <Input
            type='text'
            value={fileName}
            onChange={onChangeFileName}
          />
          <RedMessage>
            설정을 변경하면 자동으로 수정됩니다.
          </RedMessage>
        </Label>
        <Label className='flex-1'>
          <LabelTitle>확장자</LabelTitle>
          <Select
            data={[ 'png', 'jpg', ]}
            state={fileExtension}
            setState={setFileExtension}
          />
        </Label>
      </RowFlex>
    </ColFlex>
  );
}
