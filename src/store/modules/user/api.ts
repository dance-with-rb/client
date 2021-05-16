import Http from '@utils/http';

import { UserRequest } from './types';

async function login({ username, password }: UserRequest): Promise<boolean> {
  const response = await Http.post('/auth/login', { username, password });

  if (response?.status === 200) {
    const { accessToken } = response.data;

    Http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return true;
  }
  return false;
}

export default {
  login,
};
