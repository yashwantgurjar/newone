import express from "express";
const route=express.Router();
import stucontrollar from "../studentcontrollar/studentcontrollar.js";
route.get("/info",stucontrollar.studentinfo);

export default route;