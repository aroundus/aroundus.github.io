import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

import HomeContainer from '~containers/HomeContainer';

const App = () => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    AOS.init();
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
