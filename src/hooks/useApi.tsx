import { useEffect, useState } from 'react';

export enum Endpoints {
  user = 'users',
  post = 'posts',
  comment = 'comments',
}

export function useAPI<T>(endpoint: Endpoints, id?: string | number): T | undefined {
  const [JSONresult, setJSONResult] = useState<T>();

  useEffect(() => {
    const fetchFromAPI = async () => {
      const url = `${process.env.GATSBY_API_URL}/${endpoint}${id ? `/${id}` : ''}`;

      const result = await fetch(url, {
        headers: new Headers({
          'X-Auth': process.env.GATSBY_BEARER_TOKEN || '',
        }),
      });

      const JSON = await result.json();

      setJSONResult(JSON);
    };

    fetchFromAPI();
  }, [endpoint, id]);

  return JSONresult;
}

export default useAPI;
