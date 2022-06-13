import { useEffect, useState } from "react";

const useFetch = (endPoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${endPoint}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [endPoint]);

  return { data, loading, error };
};

export default useFetch;
