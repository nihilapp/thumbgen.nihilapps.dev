import crypto from 'crypto';

export function createDeleteCode() {
  // A-Z 의 문자를 랜덤하게 12자리 만들어 반환.
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const result = [];

  for (let i = 0; i < 12; i++) {
    const random = crypto.randomInt(0, characters.length);

    result.push(characters[random]);
  }

  return result.join('');
}
