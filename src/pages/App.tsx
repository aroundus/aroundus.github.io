import React, { useEffect, useState } from 'react';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

import KeyVisualSection from '~components/Section/KeyVisualSection';
import PostSection from '~components/Section/PostSection';

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
            <KeyVisualSection />
            <PostSection />
          </Layout>
        </>
      )}
    </>
  );
};

export default App;
