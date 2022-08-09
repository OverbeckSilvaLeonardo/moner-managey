import express from "express";
import incomeRoutes from "./incomeRoutes.js";

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send({ titulo: "Moner Managey Backend" }));

  app.use(express.json(), incomeRoutes);
};

export default routes;
