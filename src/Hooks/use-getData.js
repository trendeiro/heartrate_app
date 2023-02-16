import axios from "axios";
import { useCallback, useState } from "react";

/**
 *
 * Costume hook to retrive data from database with isLoading state and error handling
 *
 */

const backend = axios.create({
  baseURL: "http://localhost:3000/",
});

const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, getData) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await backend.request({
        url: requestConfig.url,
        method: requestConfig.method,
      });

      getData(response.data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useGetData;
