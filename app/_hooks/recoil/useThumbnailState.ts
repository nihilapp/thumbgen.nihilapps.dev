import { atom, useRecoilState } from 'recoil';

export const titleState = atom({
  key: 'thumbnail/titleState',
  default: '블로그 제목',
});

export const seriesNumberState = atom({
  key: 'thumbnail/seriesNumberState',
  default: '',
});

export const subtitleState = atom({
  key: 'thumbnail/subtitleState',
  default: '',
});

export const bgColorState = atom({
  key: 'thumbnail/bgColorState',
  default: '#ffffff',
});

export const textColorState = atom({
  key: 'thumbnail/textColorState',
  default: '#000000',
});

export const fileNameState = atom({
  key: 'thumbnail/fileNameState',
  default: '썸네일',
});

export const fileExtensionState = atom({
  key: 'thumbnail/fileExtensionState',
  default: 'png',
});

export const titleFontSizeState = atom({
  key: 'thumbnail/titleFontSizeState',
  default: 4.75,
});

export const subtitleFontSizeState = atom({
  key: 'thumbnail/subtitleFontSizeState',
  default: 3,
});

export const isDisabledState = atom({
  key: 'thumbnail/isDisabledState',
  default: false,
});

export function useThumbnailState() {
  const [ title, setTitle, ] = useRecoilState(titleState);
  const [ seriesNumber, setSeriesNumber, ] = useRecoilState(seriesNumberState);
  const [ subtitle, setSubtitle, ] = useRecoilState(subtitleState);
  const [ bgColor, setBgColor, ] = useRecoilState(bgColorState);
  const [ textColor, setTextColor, ] = useRecoilState(textColorState);
  const [ fileName, setFileName, ] = useRecoilState(fileNameState);
  const [ fileExtension, setFileExtension, ] = useRecoilState(fileExtensionState);
  const [ titleFontSize, setTitleFontSize, ] = useRecoilState(titleFontSizeState);
  const [ subtitleFontSize, setSubtitleFontSize, ] = useRecoilState(subtitleFontSizeState);
  const [ isDisabled, setIsDisabled, ] = useRecoilState(isDisabledState);

  return {
    title,
    setTitle,
    seriesNumber,
    setSeriesNumber,
    subtitle,
    setSubtitle,
    bgColor,
    setBgColor,
    textColor,
    setTextColor,
    fileName,
    setFileName,
    fileExtension,
    setFileExtension,
    titleFontSize,
    setTitleFontSize,
    subtitleFontSize,
    setSubtitleFontSize,
    isDisabled,
    setIsDisabled,
  };
}
