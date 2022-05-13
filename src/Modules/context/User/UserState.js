import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  userId: 0,
  token: {},
  getToken: () => { },
  compareTokens: () => { },
  setTokenSessionStorage: () => { },
  correctToken: false
});
export default AuthContext;

export function AuthContextProvider(props) {
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState({});
  const [correctToken, setCorrectToken] = useState(false)



  const getToken = () => {
    const token = sessionStorage.getItem('react-token');
    try {
      if (token) {
        setToken(token);
        setCorrectToken(true)
        return true;
      } else {
        setCorrectToken(false)
      }
    } catch (error) {
      setCorrectToken(false)
    }
    return false;
  }

  const compareTokens = () => {

    try {
      const tokenResult = sessionStorage.getItem('react-token');

      if (token.accessToken === '' || tokenResult.accessToken === undefined || tokenResult.accessToken === '') {
        setCorrectToken(false)
        return false
      }

      if (tokenResult.accessToken === token.accessToken) {

        setCorrectToken(true)
        return true
      } else {

        setCorrectToken(false)
        getToken()
        return false
      }
    } catch (e) {

      setCorrectToken(false)
      return false
    }
  }

  function setTokenSessionStorage(token) {
    if (token.accessToken) {
      setToken(token)
      const srtToken = token
      sessionStorage.setItem('react-token', srtToken)
      setCorrectToken(true)
    } else {
      console.error('No acces token provided, this token will fail')
      setCorrectToken(false)
    }
  }

  useEffect(() => {
    //compareTokens();
    getToken();
  }, []);



  const context = {
    userId,
    token,
    getToken,
    compareTokens,
    correctToken,
    setTokenSessionStorage
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}