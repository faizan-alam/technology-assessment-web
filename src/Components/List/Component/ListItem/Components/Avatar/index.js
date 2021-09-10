import React from "react";
import MaterialAvatar from "@material-ui/core/Avatar";

const Avatar = ({ img = [] }) => {
  const handleGetImage = () => {
    let image = null;
    if (img.length) {
      if (img[0]["media-metadata"]) {
        if (img[0]["media-metadata"][0]) {
          if (img[0]["media-metadata"][0].url) {
            image = img[0]["media-metadata"][0].url;
          }
        }
      }
    }
    return image;
  };

  const imgSrc = React.useMemo(handleGetImage, [img]);

  return <MaterialAvatar src={imgSrc} />;
};

export default Avatar;
