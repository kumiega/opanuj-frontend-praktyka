import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export const useUsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);

    axios
      .get<{ users: User[] }>(API_URL, { timeout: 5000 })
      .then((response) => {
        setUsers(response.data?.users);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          setIsError(true);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const retryRequest = () => {
    setIsError(false);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    isError,
    isLoading,
    retryRequest,
  };
};
