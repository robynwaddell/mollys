import React from 'react';
// import '../style/index.css';
// had to ask chat GPT for some help on this part but I got there in the end
const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((url, index) => (
        <img key={index} src={url} alt=""/>
      ))}
    </div>
  );
};

export default Gallery;
