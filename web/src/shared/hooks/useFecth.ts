import { useEffect, useState } from 'react';

type FetchResult<T> = {
  loading: boolean;
  error: Error | null;
  data: T | null;
};

const useFetch = <T extends unknown>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
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
        setData(json);
        setError(null);  // Clear any previous errors if the fetch is successful
      } catch (error) {
        setError(error as Error);
        setData(null);  // Clear data in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
