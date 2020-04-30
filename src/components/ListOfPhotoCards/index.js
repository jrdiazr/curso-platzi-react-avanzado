import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCardsComponent = (props) => {
  const { photos } = props.data;

  return (
    <ul>
      {photos && photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  );
};
