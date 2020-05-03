import React from "react";
import { FavsWithQuery } from "../container/getFavorites";
import { Layout } from "../components/Layout";

export const Favs = () => (
  <Layout title="Favorites Page" subtitle="Aqui puedes encontrar tus favoritos">
    <FavsWithQuery />
  </Layout>
);
