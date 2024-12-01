import { User } from '@prisma/client';
import { atom, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/_config';
import { localStorageEffect } from '@/_libs';

const meState = atom<User>({
  key: 'users/meState',
  default: null,
  effects: [
    localStorageEffect(`${siteConfig.title}/users/meState`),
  ],
});

const isSignInState = atom<boolean>({
  key: 'users/isSignInState',
  default: false,
  effects: [
    localStorageEffect(`${siteConfig.title}/users/isSignInState`),
  ],
});

export function useUsersStore() {
  const [ isInitial, setIsInitial, ] = useState(true);
  const [ me, setMe, ] = useRecoilState(meState);
  const [ isSignedIn, setIsSignedIn, ] = useRecoilState(isSignInState);

  console.log('me >> ', me);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  function signIn(user: User) {
    setMe(user);
    setIsSignedIn(true);
  }

  function signOut() {
    setMe(null);
    setIsSignedIn(false);
  }

  return {
    me: isInitial ? null : me,
    isSignedIn: isInitial ? false : isSignedIn,
    signIn,
    signOut,
    isInitial,
  };
}
