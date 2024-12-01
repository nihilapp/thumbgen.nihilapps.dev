import { NextRequest } from 'next/server';
import { User } from '@prisma/client';
import { DB } from '@/_libs';
import { createResponse, serverTools } from '@/api/_libs';
import { DeleteUserDto, UpdateUserDto } from '@/_types';

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  req: NextRequest,
  { params, }: Params
) {
  const { id, } = await params;

  const user = await DB.users().findUnique({
    where: { id, },
  });

  if (!user) {
    return createResponse<null>({
      type: 'error',
      resData: null,
      message: '찾을 수 없는 유저입니다.',
      status: 'NotFound',
    });
  }

  return createResponse<User>({
    type: 'success',
    resData: user,
    message: 'ok',
    status: 'Ok',
  });
}

export async function PATCH(
  req: NextRequest,
  { params, }: Params
) {
  const {
    name, email, role, password, image,
  }: UpdateUserDto = await req.json();
  const { id, } = await params;

  const updatedUser = await DB.users().update({
    where: { id, },
    data: {
      name, email, role, image,
    },
  });

  if (password) {
    const hashedPassword = await serverTools
      .bcrypt.dataToHash(password);

    await DB.auths().update({
      where: { userId: id, },
      data: {
        password: hashedPassword,
      },
    });
  }

  return createResponse<User>({
    type: 'success',
    resData: updatedUser,
    message: 'ok',
    status: 'Ok',
  });
}

export async function DELETE(
  req: NextRequest,
  { params, }: Params
) {
  const { deleteCode, }: DeleteUserDto = await req.json();
  const { id, } = await params;

  const user = await DB.users().findFirst({
    where: {
      id,
    },
    include: {
      UserAuth: true,
    },
  });

  if (deleteCode !== user?.UserAuth[0].deleteCode) {
    return createResponse<null>({
      type: 'error',
      resData: null,
      message: '잘못된 삭제 코드입니다.',
      status: 'BadRequest',
    });
  }

  await DB.users().delete({
    where: { id, },
  });

  return createResponse<null>({
    type: 'success',
    resData: null,
    message: 'ok',
    status: 'Ok',
  });
}
