// Get Layout
import { getLayout } from '../layouts/PublicLayout';

// Type
import { NextPageWithLayout } from '../customTypes/types';

const Home = () => {
  return (
    <>
        <h1>
          Jovial P Thomas
        </h1>

        <p>
          Get started by editing{' '}
          <code>pages/index.js</code>
        </p>
      </>
  )
};

Home.getLayout = getLayout;

const HomePage: NextPageWithLayout = Home;

export default HomePage;
