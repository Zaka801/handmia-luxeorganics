import React, { useState } from 'react';
import { Lock, Mail, Phone, User, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthModal = () => {
  const { closeAuth, isAuthOpen, isSupabaseConfigured, missingSupabaseMessage, signIn, signUp } = useAuth();
  const [mode, setMode] = useState('signin');
  const [form, setForm] = useState({ email: '', name: '', password: '', phone: '' });
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  if (!isAuthOpen) return null;

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback('');
    setSubmitting(true);

    try {
      if (mode === 'signin') {
        await signIn({ email: form.email, password: form.password });
      } else {
        const data = await signUp(form);
        if (!data.session) {
          setFeedback('Account created. Please confirm your email, then sign in to continue checkout.');
        }
      }
    } catch (error) {
      setFeedback(error.message || 'Authentication failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
        <button className="icon-button modal-close" type="button" onClick={closeAuth} aria-label="Close sign in">
          <X size={20} />
        </button>

        <div className="modal-kicker">
          <Lock size={16} />
          Secure checkout
        </div>

        <h2 id="auth-title">{mode === 'signin' ? 'Sign in to continue' : 'Create your account'}</h2>
        <p className="muted-text">
          {mode === 'signin'
            ? 'Your cart invoice is linked to your account before it goes to WhatsApp.'
            : 'Create an account once, then checkout faster on your next order.'}
        </p>

        <div className="segmented-control" aria-label="Authentication mode">
          <button type="button" className={mode === 'signin' ? 'active' : ''} onClick={() => setMode('signin')}>
            Sign in
          </button>
          <button type="button" className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>
            Create account
          </button>
        </div>

        {!isSupabaseConfigured && <div className="notice warning">{missingSupabaseMessage}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <>
              <label className="input-shell">
                <span>Name</span>
                <div>
                  <User size={18} />
                  <input name="name" value={form.name} onChange={updateField} required placeholder="Full name" />
                </div>
              </label>

              <label className="input-shell">
                <span>Phone</span>
                <div>
                  <Phone size={18} />
                  <input name="phone" value={form.phone} onChange={updateField} required placeholder="+92 XXX XXXXXXX" />
                </div>
              </label>
            </>
          )}

          <label className="input-shell">
            <span>Email</span>
            <div>
              <Mail size={18} />
              <input name="email" type="email" value={form.email} onChange={updateField} required placeholder="you@email.com" />
            </div>
          </label>

          <label className="input-shell">
            <span>Password</span>
            <div>
              <Lock size={18} />
              <input
                name="password"
                type="password"
                minLength={6}
                value={form.password}
                onChange={updateField}
                required
                placeholder="Minimum 6 characters"
              />
            </div>
          </label>

          {feedback && <div className="notice">{feedback}</div>}

          <button className="btn-primary full-width" type="submit" disabled={!isSupabaseConfigured || isSubmitting}>
            {isSubmitting ? 'Please wait...' : mode === 'signin' ? 'Sign in' : 'Create account'}
          </button>
        </form>
      </section>
    </div>
  );
};
