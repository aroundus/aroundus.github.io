import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

import Main from '~pages/Main';

const App = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    setMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <>
          <SEO />
          <Layout>
            <Main />
          </Layout>
        </>
      )}
    </>
  );
};

export default App;
