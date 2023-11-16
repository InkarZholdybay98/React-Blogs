import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(" can not fetch");
        }

        return res.json();
      })
      .then((data) => {
        {
          setData(data);
          setError(false);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        {
          setData(null);
          setError(error.message);
          setIsLoading(false);
        }
      });
  }, [url]);

  return { data, isLoading, error };
}
