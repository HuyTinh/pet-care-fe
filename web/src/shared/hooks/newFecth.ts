import { useEffect, useState } from 'react';

type FetchResult<T> = {
  loading: boolean;
  error: Error | null;
  newData: T | null;
};

const newFetch = <T extends unknown>(url: string): FetchResult<T> => {
  const [newData, setNewData] = useState<T | null>(null);
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
        setNewData(json);
        setError(null);  // Clear any previous errors if the fetch is successful
      } catch (error) {
        setError(error as Error);
        setNewData(null);  // Clear data in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, newData };
};

export default newFetch;
