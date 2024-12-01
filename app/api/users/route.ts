import { NextRequest } from 'next/server.js';
import { User } from '@prisma/client';
import { DB } from '@/_libs';
import { createDeleteCode, createResponse, serverTools } from '@/api/_libs';
import { CreateUserDto, DeleteUsersDto } from '@/_types';

export async function GET() {
  const users = await DB.users().findMany({});

  return createResponse<User[]>({
    type: 'success',
    resData: users,
    message: 'ok',
    status: 'Ok',
  });
}

export async function POST(req: NextRequest) {
  const { password, ...createUserDto }: CreateUserDto = await req.json();

  const emailCheck = await DB.users().findFirst({
    where: {
      email: createUserDto.email,
    },
  });

  const nameCheck = await DB.users().findFirst({
    where: {
      name: createUserDto.name,
    },
  });

  if (emailCheck) {
    return createResponse<null>({
      type: 'error',
      resData: null,
      message: '이미 사용중인 이메일입니다.',
      status: 'Conflict',
    });
  }

  if (nameCheck) {
    return createResponse<null>({
      type: 'error',
      resData: null,
      message: '이미 사용중인 이름입니다.',
      status: 'Conflict',
    });
  }

  const newUser = await DB.users().create({
    data: createUserDto,
  });

  const hashedPassword = await serverTools.bcrypt.dataToHash(password);

  await DB.auths().create({
    data: {
      userId: newUser.id,
      password: hashedPassword,
      deleteCode: createDeleteCode(),
    },
  });

  await DB.refreshTokens().create({
    data: {
      userId: newUser.id,
    },
  });

  return createResponse<User>({
    type: 'success',
    resData: newUser,
    message: 'ok',
    status: 'Created',
  });
}

export async function DELETE(req: NextRequest) {
  const { userIds, }: DeleteUsersDto = await req.json();

  const deletedUsers = await DB.users().deleteMany({
    where: {
      id: { in: userIds, },
    },
  });

  return createResponse<number>({
    type: 'success',
    resData: deletedUsers.count,
    message: 'ok',
    status: 'Ok',
  });
}
