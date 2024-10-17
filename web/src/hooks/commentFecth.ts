import { useEffect, useState } from 'react';

type FetchResult<T> = {
  loading: boolean;
  error: Error | null;
  comment: T | null;
};

const commentFecth = <T extends unknown>(url: string): FetchResult<T> => {
  const [comment, setComment] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const json = (await res.json()) as T;
        setComment(json);
        setError(null);  
      } catch (error) {
        setError(error as Error);
        setComment(null); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  

  return { loading, error, comment,};
};

export default commentFecth;
