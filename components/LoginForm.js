import axios from 'axios';

export default function LoginForm() {
  const login = (e) => {
    e.preventDefault();
    console.log('hi');
    axios
      .post('https://thawing-escarpment-59373.herokuapp.com/auth/local', {
        identifier: 'dustinsimensen@gmail.com',
        password: 'Sublime1989',
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  return (
    <form onSubmit={(e) => login(e)}>
      <div className="mb-4">
        <label className="block text-gray text-sm text mb-2 md:text-lg" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
          id="email"
          type="email"
          placeholder="JaneDoe@example.com"
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
