import { useState } from 'react';
import ContactForm from '../../components/ContactForm';
import Layout from '../../components/Layout';
import { fetchQuery } from '../../lib/fetchQuery';
import LoginForm from '../../components/LoginForm';

export default function Login({ globalData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Layout data={globalData}>
      <section className="flex flex-col xl:flex-row place-content-center">
        <section className="xl:w-2/5">
          <header>
            <h1 className="text-2xl mb-4 mt-4 md:mt-0 md:text-3xl">Login</h1>
          </header>
          <LoginForm
            setEmail={setEmail}
            email={email}
            password={password}
            setPassword={setPassword}
          />
        </section>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const globalData = await fetchQuery('global');

  return {
    props: {
      globalData,
    },
  };
}
