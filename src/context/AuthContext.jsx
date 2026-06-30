import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { isSupabaseConfigured, missingSupabaseMessage, supabase } from '../services/supabaseClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(!isSupabaseConfigured);
  const [isAuthOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    if (!supabase) return undefined;

    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!isMounted) return;
      setSession(data.session || null);
      setReady(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession || null);
      setReady(true);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async ({ email, password }) => {
    if (!supabase) throw new Error(missingSupabaseMessage);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    setSession(data.session || null);
    setAuthOpen(false);

    return data;
  };

  const signUp = async ({ name, phone, email, password }) => {
    if (!supabase) throw new Error(missingSupabaseMessage);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          phone,
        },
      },
    });

    if (error) throw error;
    if (data.session) {
      setSession(data.session);
      setAuthOpen(false);
    }

    return data;
  };

  const signOut = async () => {
    if (supabase) await supabase.auth.signOut();
    setSession(null);
  };

  const value = useMemo(
    () => ({
      isAuthOpen,
      isAuthenticated: Boolean(session?.user),
      isSupabaseConfigured,
      missingSupabaseMessage,
      openAuth: () => setAuthOpen(true),
      closeAuth: () => setAuthOpen(false),
      ready,
      session,
      signIn,
      signOut,
      signUp,
      user: session?.user || null,
    }),
    [isAuthOpen, ready, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');

  return context;
};
