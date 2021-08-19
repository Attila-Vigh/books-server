import { Router } from "express";
import students from "./students/router.js";

const services = Router();

services.use("/students", students);

export default services;