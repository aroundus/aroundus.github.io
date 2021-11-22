import React, { useEffect, useState } from 'react';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

import KeyVisualSection from '~components/Section/KeyVisualSection';
import PostPreviewSection from '~components/Section/PostPreviewSection';

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
            <PostPreviewSection />
          </Layout>
        </>
      )}
    </>
  );
};

export default App;
