import { useEffect, useState } from "react";
import axios from "axios";

const useFetchProperties = (url) => {
  const [career, setCareer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let response = await axios.get(url);
      setCareer(response.data); // Adjust if your data structure is different
      setLoading(false);
      // console.log(properties)
      // console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { career, loading, error };
};

export default useFetchProperties;
