import { tools, type Tools } from '@/app/_libs';
import { Bcrypt } from '@/app/api/_libs/tools/bcrypt';
import { Jwt } from '@/app/api/_libs/tools/jwt';

interface ServerTools extends Tools {
  bcrypt?: Bcrypt;
  jwt?: Jwt;
}

const serverTools: ServerTools = { ...tools, };

serverTools.bcrypt = new Bcrypt();
serverTools.jwt = new Jwt();

export { serverTools };
