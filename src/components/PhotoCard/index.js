import React, { useEffect, useRef, useState } from "react";
const IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
import { Article, Img, ImgWrapper } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { Link } from "@reach/router";
import Proptypes from "prop-types";

export const PhotoCard = ({ id, liked, likes = 0, src = IMG }) => {
  const [show, ref] = useNearScreen();

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                toggleLike({
                  variables: {
                    input: { id },
                  },
                });
              };
              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: Proptypes.string.isRequired,
  liked: Proptypes.bool.isRequired,
  src: Proptypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`El valor de ${propName} debe ser definido`);
    }

    if (propValue < 0) {
      return new Error(`El valor de ${propName} debe ser mayor a 0`);
    }
  },
};
