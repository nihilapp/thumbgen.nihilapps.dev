'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useThumbnailState } from '@/_hooks/recoil';

interface Props {
  children?: React.ReactNode;
}

const Screen = styled.canvas`
  width: 1280px;
  height: 720px;
  object-fit: contain;
  aspect-ratio: 16 / 9;
`;

export function ThumbgenScreen({ children, }: Props) {
  const state = useThumbnailState();

  useEffect(() => {
    drawCanvas();
  }, [ state.title, state.seriesNumber, state.subtitle, state.bgColor, state.textColor, state.titleFontSize, state.subtitleFontSize, ]);

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1280;
    canvas.height = 720;

    ctx.fillStyle = state.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = state.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Convert rem to px (assuming 1rem = 16px)
    const titleFontSizePx = state.titleFontSize * 16;
    const subtitleFontSizePx = state.subtitleFontSize * 16;

    let displayTitle = state.title;
    if (state.seriesNumber) {
      displayTitle += ` #${state.seriesNumber}`;
    }

    if (state.subtitle) {
      ctx.font = `bold ${titleFontSizePx}px 'Noto Sans CJK KR', sans-serif`;
      ctx.fillText(displayTitle, centerX, centerY - titleFontSizePx / 2);

      ctx.font = `${subtitleFontSizePx}px 'Noto Sans CJK KR', sans-serif`;
      ctx.fillText(state.subtitle, centerX, centerY + titleFontSizePx / 2 + 10);
    } else {
      ctx.font = `bold ${titleFontSizePx}px 'Noto Sans CJK KR', sans-serif`;
      ctx.fillText(displayTitle, centerX, centerY);
    }
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <Screen ref={canvasRef} />
  );
}
