import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import SEO from '../../components/Seo';
import Layout from '../../components/Layout';

const FLICKR_USER_ID = '147991560@N07';
const FLICKR_URL = `https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${process.env.FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=?`;

const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    grid-template-columns: 1fr;
    padding: 0 .5em;
  `}
`;

const Grid = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const fetchFlickPhotos = () => fetch(FLICKR_URL).then(res => res.json());

const Extras = () => {
  const [photos1, setPhotos1] = useState([]);
  const [photos2, setPhotos2] = useState([]);

  useEffect(() => {
    fetchFlickPhotos().then(res => {
      setPhotos1(res.photos.photo.slice(0, res.photos.photo.length / 2));
      setPhotos2(res.photos.photo.slice(res.photos.photo.length / 2));
    });
  }, []);

  return (
    <>
      <SEO title="Extras" />
      <Layout title="Why?">
        <Main>
          <Grid>
            {photos1.map(photo => {
              const { farm, server, id, secret } = photo;
              const link = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
              return <img key={id} src={link} alt="" />;
            })}
          </Grid>
          <Grid>
            {photos2.map(photo => {
              const { farm, server, id, secret } = photo;
              const link = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
              return <img key={id} src={link} alt="" />;
            })}
          </Grid>
        </Main>
        {/* <Grid>
          {photos.map(photo => {
            const { farm, server, id, secret } = photo;
            const link = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
            return <img src={link} />;
          })}
        </Grid> */}
      </Layout>
    </>
  );
};

export default Extras;
