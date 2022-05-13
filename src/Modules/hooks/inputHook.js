import { useState } from 'react';
import wait from '../helpers/wait';

const useInput = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Guardar estats input desde component input
  // Per exemple valor, correcte/incorrecte, etc

  return {
    isLoading,
    error,
    setError
  };
}
export default useInput;