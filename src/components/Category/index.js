import React from 'react';
const IMG = "https://i.imgur.com/dJa0Hpl.jpg";
import {Anchor, Image} from './styles';

export const Category = ({cover = IMG, path, emoji = '?'}) => {
  console.log("Cat");
  
  return (
    <Anchor href={path}>
      <Image src={cover}/>
      {emoji}
    </Anchor>
  );
}
