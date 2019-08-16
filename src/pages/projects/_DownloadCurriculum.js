import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Mixpanel } from '../../services/Mixpanel';
import A from '../../components/A';

const DownloadCurriculum = () => {
  const onClickHandler = () => Mixpanel.track('User downloaded CV');

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
    <A
      href={link}
      download="beatricecox_cv"
      onClick={onClickHandler}
      style={{ marginBottom: '15px' }}
    >
      Download CV
    </A>
  );
};

export default DownloadCurriculum;
