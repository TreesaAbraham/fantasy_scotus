// src/Login.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate, Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      // Redirect into your protected area
      navigate('/app');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20 }}>
      <h2>Log In</h2>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8, margin: '8px 0' }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8, margin: '8px 0' }}
          />
        </label>
        <button type="submit" style={{ padding: '8px 16px' }}>
          Sign In
        </button>
      </form>
      <p style={{ marginTop: 12 }}>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
