import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthHeader from '../components/auth/AuthHeader';
import '../scotus.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
      return;
    }
    navigate('/app');
  }

  return React.createElement(
    AuthLayout,
    null,
    React.createElement(AuthHeader, { title: 'Sign In', subtitle: 'Welcome back to Fantasy SCOTUS' }),
    errorMsg ? React.createElement('div', { role: 'alert', className: 'auth-error' }, errorMsg) : null,
    React.createElement(
      'form',
      { onSubmit: handleSubmit, 'aria-label': 'Sign in form', className: 'auth-form' },
      React.createElement('label', { className: 'auth-label', htmlFor: 'email' }, 'Email'),
      React.createElement('input', {
        id: 'email',
        type: 'email',
        required: true,
        value: email,
        onChange: function (e) { setEmail(e.target.value); },
        className: 'auth-input',
        placeholder: 'you@example.com',
        autoComplete: 'email'
      }),
      React.createElement('label', { className: 'auth-label', htmlFor: 'password' }, 'Password'),
      React.createElement('input', {
        id: 'password',
        type: 'password',
        required: true,
        value: password,
        onChange: function (e) { setPassword(e.target.value); },
        className: 'auth-input',
        placeholder: '••••••••',
        autoComplete: 'current-password'
      }),
      React.createElement(
        'button',
        { type: 'submit', className: 'auth-btn-primary', disabled: loading },
        loading ? 'Signing in…' : 'Sign In'
      )
    ),
    React.createElement(
      'p',
      { className: 'auth-muted' },
      "Don\u2019t have an account? ",
      React.createElement(Link, { to: '/signup', className: 'auth-link' }, 'Sign up')
    )
  );
}
