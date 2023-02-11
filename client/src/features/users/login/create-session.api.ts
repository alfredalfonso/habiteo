import { baseServerURL } from '@utils/base-server-url';

export async function createSession({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const { data } = await baseServerURL.post('/session/login', {
      email,
      password,
    });
    return data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}
