import { createContext, useCallback, useState } from "react";
import { useContext } from "react";
import api from '../services/api';
import { User, AuthContextData, AuthState, key_auth } from './types/auth';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(key_auth.KEY_TOKEN);
    const user = localStorage.getItem(key_auth.KEY_USER);

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;

  });

  const sigIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    localStorage.setItem(key_auth.KEY_TOKEN, token);
    localStorage.setItem(key_auth.KEY_USER, JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);


  const sigOut = useCallback(() => {

    localStorage.removeItem(key_auth.KEY_TOKEN);
    localStorage.removeItem(key_auth.KEY_USER);

    setData({} as AuthState);
  }, []);

  const updatedAvatar = useCallback(async (user: User) => {
    localStorage.setItem(key_auth.KEY_USER, JSON.stringify(user));

    setData({
      token: data.token,
      user,
    });
  }, [setData, data.token]);

  const changeUserName = useCallback(async (name: string) => {
    setData(state => ({...state, user: {
      id: state.user.id,
      name,
      profile_avatar: state.user.profile_avatar
    }}))
  }, [])

  return (
    <AuthContext.Provider value={{ 
      user: data.user,
      authentication: !!data.user,
      sigIn,
      sigOut,
      updatedAvatar,
      changeUserName
    }}>
      { children }
    </AuthContext.Provider>  
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {  
    throw new Error('useAuth must be used within a Authentication')
  }

  return context;
}

export { AuthProvider, useAuth }