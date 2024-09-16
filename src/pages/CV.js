import React from 'react';
import PageTemplate from '../components/PageTemplate';

const CV = ({ isChaos }) => {
  const content = (
    <>
      <h2>Curriculum Vitae</h2>
      <section>
        <h3>Education</h3>
        <p>[Your education details here]</p>
      </section>
      <section>
        <h3>Work Experience</h3>
        <p>[Your work experience details here]</p>
      </section>
      <section>
        <h3>Skills</h3>
        <p>[Your skills here]</p>
      </section>
    </>
  );

  return <PageTemplate title="CV" content={content} isChaos={isChaos} />;
};

export default CV;