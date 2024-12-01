'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const Layout = {
  Container: styled.div`
    // 컨테이너 스타일
  `,

  Header: styled.header`
    // 헤더 스타일
  `,

  Nav: styled.nav`
    // 네비게이션 스타일
  `,

  Logo: styled(Image)`
    width: 250px;
    height: auto;
  `,

  Main: styled.main`
    // 메인 스타일
  `,

  Side: styled.aside`
    // 사이드 스타일
  `,

  Footer: styled.footer`
    // 푸터 스타일
  `,

  Title: styled.h1`
    // 타이틀 스타일
  `,

  HiddenTitle: styled.span`
    // 숨겨진 타이틀 스타일
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `,
} as const;
