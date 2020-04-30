import React from "react";
const IMG = "https://i.imgur.com/dJa0Hpl.jpg";
import { Link, Image } from "./styles";

export const Category = ({ cover = IMG, path = "#", emoji = "?" }) => {
  return (
    <Link to={path}>
      <Image src={cover} />
      {emoji}
    </Link>
  );
};
