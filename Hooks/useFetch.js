import axios from 'axios';
import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(url);
          setData(response.data);
          setError(null);
        } catch (error) {
          setError(error);
          setData(null);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
  
      // Cleanup function
      return () => {
        // Cleanup code (if needed)
      };
    }, [url]); // Trigger the effect when the URL changes
  
    return { data, error, isLoading };
  };
  
  export default useFetch;