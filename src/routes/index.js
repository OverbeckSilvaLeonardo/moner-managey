import express from "express";
import incomeRoutes from "./incomeRoutes.js";
import expenseRoutes from "./expenseRoutes.js";

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send({ titulo: "Moner Managey Backend" }));

  app.use(
    express.json(), 
    incomeRoutes, 
    expenseRoutes
    );
};

export default routes;
