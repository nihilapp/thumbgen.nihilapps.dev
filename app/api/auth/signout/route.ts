import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { createResponse, serverTools } from '../../_libs';
import { DB } from '@/app/_libs';
import { SessionCookie, SignOutDto } from '@/app/_types';

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function POST(req: NextRequest, { params, }: Params) {
  const { token, }: SignOutDto = await req.json();
  const { id, } = await params;

  const user = await DB.users().findUnique({
    where: {
      id,
    },
  });

  const cookieStore = await cookies();
  const tokenCookie = serverTools.common.parse<SessionCookie>(
    cookieStore.get('session')?.value
  );

  if (tokenCookie?.token !== token) {
    return createResponse<null>({
      type: 'error',
      resData: null,
      status: 'Unauthorized',
      message: '권한이 없습니다.',
    });
  }

  await DB.users().delete({
    where: {
      id: user.id,
    },
  });

  return createResponse<null>({
    type: 'success',
    resData: null,
    status: 'Ok',
    message: '로그아웃 되었습니다.',
  });
}
