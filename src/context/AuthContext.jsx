import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut } from 'firebase/auth';
import { auth, googleProvider, ADMIN_EMAILS } from '../config/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      try {
        // First, check for redirect result (returning from Google sign-in)
        const result = await getRedirectResult(auth);
        if (result?.user && isMounted) {
          setUser(result.user);
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error('Redirect result error:', error);
      }

      // Then listen for auth state changes
      onAuthStateChanged(auth, (user) => {
        if (isMounted) {
          setUser(user);
          setLoading(false);
        }
      });
    };

    initAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const isAdmin = user && ADMIN_EMAILS.includes(user.email);

  const value = {
    user,
    loading,
    isAdmin,
    loginWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
