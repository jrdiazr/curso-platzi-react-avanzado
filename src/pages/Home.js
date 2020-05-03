import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { Layout } from "../components/Layout";

export const Home = ({ id }) => {
  return (
    <Layout
      title="App fotos mascotas"
      subtitle="Puedes encontrar fotos super de mascotas"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};
