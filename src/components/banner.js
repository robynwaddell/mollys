import React from 'react';
// import '../style/index.css';
import Button from './button';

const Banner = ({ title, text, primaryBtnText, secondaryBtnText }) => {
  return (
    <section className="banner">
        <div className='bannerbox'>
        <h2>{title}</h2>
      <p>{text}</p>
      <div>
        <Button type="primary" text={primaryBtnText} />
        <Button type="secondary" text={secondaryBtnText} />
      </div>
        </div>
    </section>
  );
};

export default Banner;
