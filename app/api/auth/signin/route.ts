import { NextRequest } from 'next/server';
import { SignInDto } from '@/_types';
import { DB } from '@/_libs';
import { createResponse, serverTools } from '../../_libs';

export async function POST(req: NextRequest) {
  const { email, password, }: SignInDto = await req.json();

  const user = await DB.users().findFirst({
    where: { email, },
    include: {
      UserAuth: true,
    },
  });

  if (!user) {
    return createResponse<null>({
      type: 'error',
      resData: null,
      message: '존재하지 않는 이메일입니다.',
      status: 'Unauthorized',
    });
  }

  const isValidPassword = await serverTools.bcrypt
    .dataCompare(
      user.UserAuth[0].password,
      password
    );

  if (!isValidPassword) {
    return createResponse<null>({
      type: 'error',
      resData: null,
      message: '비밀번호가 일치하지 않습니다.',
      status: 'Unauthorized',
    });
  }

  const accessToken = await serverTools.jwt
    .genToken('accessToken', user);
  const accessTokenInfo = await serverTools.jwt
    .tokenInfo('accessToken', accessToken.token);

  await serverTools.jwt.setCookieValue(
    'session',
    serverTools.common.string({
      token: accessToken.token,
      exp: accessTokenInfo.exp,
    }),
    accessToken.exp
  );

  await serverTools.jwt.setCookieValue(
    'isSignedIn',
    'Y',
    accessToken.exp
  );

  await serverTools.jwt.setCookieValue(
    'cuid',
    user.id,
    accessToken.exp
  );

  const updatedUser = await serverTools.jwt
    .updateUserToken(
      'signin',
      user.id,
      accessToken.token,
      accessTokenInfo.exp
    );

  console.log('updatedUser >> ', updatedUser);

  return createResponse({
    type: 'success',
    resData: updatedUser,
    message: '로그인에 성공했습니다.',
    status: 'Ok',
  });
}
