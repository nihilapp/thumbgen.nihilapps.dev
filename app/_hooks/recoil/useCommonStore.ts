import { atom, useRecoilState } from 'recoil';
import { localStorageEffect } from '@/_libs';
import { siteConfig } from '@/_config';

const searchTypeAtom = atom<string>({
  key: 'search/searchType',
  default: '',
  effects: [
    localStorageEffect(`${siteConfig.title}/search/searchType`),
  ],
});

const searchMessageAtom = atom<string>({
  key: 'search/searchMessage',
  default: '',
  effects: [
    localStorageEffect(`${siteConfig.title}/search/searchMessage`),
  ],
});

const showSearchBarAtom = atom<boolean>({
  key: 'search/showSearchBar',
  default: false,
  effects: [
    localStorageEffect(`${siteConfig.title}/search/showSearchBar`),
  ],
});

export function useCommonStore() {
  const [ searchType, setSearchType, ] = useRecoilState(searchTypeAtom);
  const [ searchMessage, setSearchMessage, ] = useRecoilState(searchMessageAtom);
  const [ showSearch, setShowSearch, ] = useRecoilState(showSearchBarAtom);

  return {
    searchType,
    searchMessage,
    showSearch,
    setSearchType,
    setSearchMessage,
    setShowSearch,
  };
}
