import { useEffect, useState } from 'react';

export enum Endpoints {
  user = 'users',
  post = 'posts',
  comment = 'comments',
}

export async function fetchFromAPI<T>(url: string): Promise<T | undefined> {
  try {
    const result = await fetch(url, {
      headers: new Headers({
        'X-Auth': process.env.GATSBY_BEARER_TOKEN || '',
      }),
    });

    if (!result.ok) {
      throw new Error(`Response failed`);
    }

    const JSON = await result.json();

    return JSON as T;
  } catch (e: any) {
    console.error(e.message);
  }
}

export function useAPI<T>(
  endpoint: Endpoints,
  hasServerData?: boolean,
  id?: string | number,
): { result: T | undefined; loading: boolean } {
  const [JSONresult, setJSONResult] = useState<T>();
  const [loading, setLoading] = useState(false);

  if (hasServerData) {
    return {
      result: undefined,
      loading,
    };
  }

  useEffect(() => {
    const url = `${process.env.GATSBY_API_URL}/${endpoint}${id ? `/${id}` : ''}`;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFromAPI<T>(url);
        result && setJSONResult(result);
        setLoading(false);
      } catch (e: any) {
        console.error(e.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, id]);

  return {
    result: JSONresult,
    loading,
  };
}

export default useAPI;
