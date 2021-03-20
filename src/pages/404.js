import React from 'react';
import { Layout, SEO } from 'components/common';

export default () => (
  <Layout>
    <SEO title="404: Stránka nenalezena" location="/404" />
    <h1>Tato stránka neexistuje</h1>
    <p>Je to smutné, ale je to tak.</p>
  </Layout>
);
