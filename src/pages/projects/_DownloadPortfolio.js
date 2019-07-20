import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Mixpanel } from '../../services/Mixpanel';
import A from '../../components/A';

const DownloadPortfolio = () => {
  const onClickHandler = () => Mixpanel.track('User downloaded Portfolio');

  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "BeatriceCV.pdf" }) {
        publicURL
        name
      }
    }
  `);

  const { publicURL: link } = data.desktop;

  return (
    <A href={link} download="beatricecox_portfolio" onClick={onClickHandler}>
      Download Portfolio
    </A>
  );
};

export default DownloadPortfolio;
