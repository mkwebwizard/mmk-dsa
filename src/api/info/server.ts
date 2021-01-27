import { api } from '..';

const ENDPOINT = 'server/info';
const METHOD = 'server()';

export async function serverByDirectus() {
  try {
    const { data } = await api.directus.server.info();
    return data;
  } catch (error) {
    console.error(METHOD, error);
  }
  return null;
}

export async function serverByAxios() {
  try {
    const res = await api.axios.get(ENDPOINT);
    if (res?.status === 200) {
      return res?.data?.data;
    }
  } catch (error) {
    console.error(METHOD, error);
  }
  return null;
}

export default serverByDirectus;
