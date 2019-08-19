import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Masonry from 'react-masonry-css';

import SEO from '../../components/Seo';
import CopyRight from '../../components/CopyRight';
import Layout from '../../components/Layout';

const BASE_URL =
  'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos';
const FLICKR_USER_ID = '147991560@N07';
const FLICKR_URL = `${BASE_URL}&api_key=${process.env.GATSBY_FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=?`;

const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / end;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    grid-template-columns: 1fr;
    padding: 0 .5em;
  `}

  .my-masonry-grid {
    display: flex;
    margin-left: -10px;
    width: 100%;

    ${media.lessThan('medium')`
      margin-left: 0;
    `}
  }
  .my-masonry-grid_column {
    padding-left: 10px;
    background-clip: padding-box;

    img {
      height: auto;
      width: 100%;
      margin-bottom: 5px;
    }

    ${media.lessThan('medium')`
      padding-left: 0;
    `}
  }
`;

const Loading = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const Bottom = styled.div`
  padding: ${({ theme }) => theme.margin.lg} 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fetchFlickrPhotos = () => fetch(FLICKR_URL).then(res => res.json());

const Extras = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFlickrPhotos().then(res => {
      setPhotos(res.photos.photo);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <SEO title="Extras" />
      <Layout title="Why?">
        <Main>
          {loading ? (
            <Loading>Loading...</Loading>
          ) : (
            <Masonry
              breakpointCols={{
                default: 2,
                1100: 2,
                700: 2,
                500: 1,
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {photos.map(photo => {
                const { farm, server, id, secret } = photo;
                const link = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
                return <img key={id} src={link} alt="" />;
              })}
            </Masonry>
          )}
          <Bottom>
            <CopyRight />
          </Bottom>
        </Main>
      </Layout>
    </>
  );
};

export default Extras;
