import { useEffect, useState } from 'react';

export enum Endpoints {
  user = 'users',
  post = 'posts',
  comment = 'comments',
}

export function useAPI<T>(endpoint: Endpoints, id?: number): T | undefined {
  const [JSONresult, setJSONResult] = useState<T>();

  useEffect(() => {
    const fetchFromAPI = async () => {
      const url = `https://demo.martian.services/api/${endpoint}${id ? `/${id}` : ''}`;

      const result = await fetch(url, {
        headers: new Headers({
          'X-Auth': 'bWFydGlhbmFuZG1hY2hpbmU=',
        }),
      });

      const JSON = await result.json();

      setJSONResult(JSON);
    };

    fetchFromAPI();
  }, []);

  return JSONresult;
}

export default useAPI;
