import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SEO from '../components/Seo';

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    * {
      font-family: 'Montserrat' !important;
    }
  }
`;
const NotFoundPage = () => (
  <Div>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>
      The page you are looking for does not exists on this website.
      <br />
      Please <Link to="/">click here</Link> to go back tothe home page.
    </p>
  </Div>
);

export default NotFoundPage;
