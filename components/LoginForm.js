import axios from 'axios';
import { useState } from 'react';
import { setCookie } from 'nookies';
import Router from 'next/router';

export default function LoginForm({ setEmail, email, setPassword, password }) {
  const [error, setError] = useState('');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const login = async (e) => {
    e.preventDefault();
    const login = await axios
      .post(`${baseUrl}/auth/local`, {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log('Logged in!');
        setError('');
        return response;
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
        setError('Error: incorrect credentials');
      });

    const loginResponse = await login;

    setCookie(null, 'jwt', loginResponse.data.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    Router.push('https://thawing-escarpment-59373.herokuapp.com/admin');
  };

  return (
    <form onSubmit={(e) => login(e)}>
      {error && <h2 className=" text-base text-red mb-4">{error}</h2>}
      <div className="mb-4">
        <label className="block text-gray text-sm text mb-2 md:text-lg" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
          id="email"
          type="email"
          placeholder="JaneDoe@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray text-sm mb-2 md:text-lg" htmlFor="name">
          Password
        </label>
        <input
          className="shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="border border-gray hover:bg-pink hover:text-white text-gray w-full py-2 px-4 focus:outline-none focus:shadow-outline xl:border-2"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
