import { User } from '@prisma/client';
import { DB } from '@/_libs';
import { createResponse } from '@/api/_libs';

export async function GET() {
  const users = await DB.users().findMany({
    take: 5,
    orderBy: {
      updated: 'desc',
    },
  });

  return createResponse<User[]>({
    type: 'success',
    resData: users,
    message: 'ok',
    status: 'Ok',
  });
}
