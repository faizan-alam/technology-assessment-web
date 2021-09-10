import React from "react";

import "./styles.scss";

const Banner = ({ img = [] }) => {
  const handleGetImage = () => {
    let image = null;
    if (img.length) {
      const mediaMetaData = img[0]["media-metadata"];
      if (mediaMetaData) {
        if (mediaMetaData[mediaMetaData.length - 1]) {
          if (mediaMetaData[mediaMetaData.length - 1].url) {
            image = mediaMetaData[mediaMetaData.length - 1].url;
          }
        }
      }
    }
    return image;
  };

  const imgSrc = React.useMemo(handleGetImage, [img]);

  return (
    <div style={{ backgroundImage: `url('${imgSrc}')` }} className="banner" />
  );
};

export default Banner;
