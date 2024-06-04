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

    return JSON;
  } catch (e: any) {
    console.error(e.message);
  }
}

export function useAPI<T>(endpoint: Endpoints, id?: string | number): T | undefined {
  const [JSONresult, setJSONResult] = useState<T>();

  useEffect(() => {
    const url = `${process.env.GATSBY_API_URL}/${endpoint}${id ? `/${id}` : ''}`;

    const fetchData = async () => {
      try {
        const result = await fetchFromAPI<T>(url);
        result && setJSONResult(result);
      } catch (e: any) {
        console.error(e.message);
      }
    };

    fetchData();
  }, [endpoint, id]);

  return JSONresult;
}

export default useAPI;
