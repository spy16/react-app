import * as functions from "firebase-functions";
import express from "express";
import server from "./gql/server";

const app = express();
app.all("/gql", server.createHandler());

export const api = functions.https.onRequest(app);
