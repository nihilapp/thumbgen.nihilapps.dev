'use client';

import { create } from 'zustand';

export interface ThumbnailState {
  title: string;
  seriesNumber: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  fileName: string;
  fileExtension: string;
  titleFontSize: number;
  subtitleFontSize: number;
  isDisabled: boolean;
  reset: () => void;
  // eslint-disable-next-line no-unused-vars
  setTitle: (title: string) => void;
  // eslint-disable-next-line no-unused-vars
  setSeriesNumber: (seriesNumber: string) => void;
  // eslint-disable-next-line no-unused-vars
  setSubtitle: (subtitle: string) => void;
  // eslint-disable-next-line no-unused-vars
  setBgColor: (color: string) => void;
  // eslint-disable-next-line no-unused-vars
  setTextColor: (color: string) => void;
  // eslint-disable-next-line no-unused-vars
  setFileName: (fileName: string) => void;
  // eslint-disable-next-line no-unused-vars
  setFileExtension: (fileExtension: string) => void;
  // eslint-disable-next-line no-unused-vars
  setTitleFontSize: (titleFontSize: number) => void;
  // eslint-disable-next-line no-unused-vars
  setSubtitleFontSize: (subtitleFontSize: number) => void;
  // eslint-disable-next-line no-unused-vars
  setIsDisabled: (isDisabled: boolean) => void;
}

export const thumbnailStore = create<ThumbnailState>((set) => ({
  title: '블로그 제목',
  seriesNumber: '',
  subtitle: '',
  bgColor: '#FFFFFF',
  textColor: '#000000',
  fileName: '블로그 제목',
  fileExtension: 'png',
  titleFontSize: 4.75,
  subtitleFontSize: 3,
  isDisabled: false,
  reset: () => set({
    title: '블로그 제목',
    seriesNumber: '',
    subtitle: '',
    bgColor: '#FFFFFF',
    textColor: '#000000',
    fileName: '블로그 제목',
    fileExtension: 'png',
    titleFontSize: 4.75,
    subtitleFontSize: 3,
    isDisabled: false,
  }),
  setTitle: (title) => (
    set({
      title,
    })
  ),
  setSeriesNumber: (seriesNumber) => (
    set({
      seriesNumber,
    })
  ),
  setSubtitle: (subtitle) => (
    set({
      subtitle,
    })
  ),
  setBgColor: (bgColor) => (
    set({
      bgColor,
    })
  ),
  setTextColor: (textColor) => (
    set({
      textColor,
    })
  ),
  setFileName: (fileName) => (
    set({
      fileName,
    })
  ),
  setFileExtension: (fileExtension) => (
    set({
      fileExtension,
    })
  ),
  setTitleFontSize: (titleFontSize) => (
    set({
      titleFontSize,
    })
  ),
  setSubtitleFontSize: (subtitleFontSize) => (
    set({
      subtitleFontSize,
    })
  ),
  setIsDisabled: (isDisabled) => (
    set({
      isDisabled,
    })
  ),
}));
