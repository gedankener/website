import React from 'react';
import PageTemplate from '../components/PageTemplate';

const ShowsTV = ({ isChaos }) => {
  const content = (
    <>
      <h2>My Favorite Shows & TV Series</h2>
      <p>Here's a list of some TV shows and series that I enjoy watching:</p>
      <ul>
        <li>
          <h3>Show Title 1</h3>
          <p>Brief description of the show and why I like it.</p>
        </li>
        <li>
          <h3>Show Title 2</h3>
          <p>Brief description of the show and why I like it.</p>
        </li>
        <li>
          <h3>Show Title 3</h3>
          <p>Brief description of the show and why I like it.</p>
        </li>
        <li>
          <h3>Show Title 4</h3>
          <p>Brief description of the show and why I like it.</p>
        </li>
      </ul>
      <h3>Currently Watching</h3>
      <p>I'm currently binge-watching [Show Name]. It's about [brief description].</p>
      <h3>All-Time Favorite</h3>
      <p>My all-time favorite show is [Show Name]. I've watched it [number] times!</p>
      <p>What about you? Do we share any favorite shows? Let me know in the 'Leave a Note' section!</p>
    </>
  );

  return <PageTemplate title="Shows & TV" content={content} isChaos={isChaos} />;
};

export default ShowsTV;