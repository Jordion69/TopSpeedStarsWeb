import { useState, useCallback, useContext } from 'react';
import AuthContext from '../context/User/UserContext';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const ctx = useContext(AuthContext);


  const sendRequest = useCallback(async (requestConfig, manageData) => {
    setIsLoading(true);
    setError(null);
    try {
      let headers = '';
      if (requestConfig.auth) {
        headers = {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${ctx.token}`
        }
      } else {
        headers = {
          'Content-type': 'application/json',
        }
      }

      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers,
        body: JSON.stringify(requestConfig.body),
      });



      /*if (!response.ok) {
        throw new Error('Request failed!');
      }*/
      const data = await response.json();

      console.log(data);
      manageData(data);
    } catch(err) {
      console.log('Use https ', err)
      setError(err.message || 'Something went wrong!');
      const data = {
        status: 500,
        error: err.message
      }
      manageData(data)
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    setError,
    sendRequest,
  };
}
export default useHttp;