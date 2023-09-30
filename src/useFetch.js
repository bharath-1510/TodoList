import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, crud] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, seterr] = useState(null);

  useEffect(() => {
    const abortcon = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortcon.signal })
        .then((res) => {
          if (!res.ok) throw Error("Could not fetch data for");
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          seterr(null);
          crud(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") console.log("fetch Aborted");
          else {
            setIsPending(false);
            seterr(err.message);
          }
        });
    }, 1000);
    return () => abortcon.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
