import React from 'react';
import Layout from '../components/layout.js';
import SEO from "../components/seo"

const Menu = ({ data }) => {

  return (
    <Layout>
    <SEO title="Menu" />
    <h1>Menu Page</h1>
  </Layout> 
  );
};

export default Menu;