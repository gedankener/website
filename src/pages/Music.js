import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Music = ({ isChaos }) => {
  const content = (
    <>
      <h2>My Music</h2>
      <h3>Favorite Artists</h3>
      <ul>
        <li>Artist 1</li>
        <li>Artist 2</li>
        <li>Artist 3</li>
      </ul>
      <h3>Playlist</h3>
      <p>[Embed a playlist or list favorite songs here]</p>
    </>
  );

  return <PageTemplate title="Music" content={content} isChaos={isChaos} />;
};

export default Music;