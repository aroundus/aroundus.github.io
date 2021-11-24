import React, { useEffect, useState } from 'react';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

import HomeContainer from '~containers/HomeContainer';

const App = () => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      {isMount && (
        <>
          <SEO />
          <Layout>
            <HomeContainer />
          </Layout>
        </>
      )}
    </>
  );
};

export default App;
