import { parse, stringify } from 'postcss';
import Layout from '../../components/Layout';
import { fetchQuery } from '../../lib/fetchQuery';
import { parseCookies } from 'nookies';

export default function Dashboard({ globalData, dashboardData }) {
  console.log(dashboardData);

  return (
    <Layout data={globalData}>
      <section className="flex flex-col xl:flex-row place-content-center">
        <section className="xl:w-2/5">
          <header>
            <h1 className="text-2xl mb-4 mt-4 md:mt-0 md:text-3xl">
              {dashboardData.text}
            </h1>
          </header>
        </section>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const jwt = parseCookies(ctx).jwt;

  const response = await fetch(`http://localhost:1337/dashboard`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });

  const dashboardData = await response.json();
  const globalData = await fetchQuery('global');
  return {
    props: {
      globalData,
      dashboardData,
    },
  };
}
