import { useEffect, useState } from "react";
import Axios from "axios";

export const useAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const result = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(result.data);
    };
    getUsers();
  }, []);
  return [data];
};
