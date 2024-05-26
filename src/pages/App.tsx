import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

import Main from '@/pages/Main';

const App = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    setIsMounted(true);
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
