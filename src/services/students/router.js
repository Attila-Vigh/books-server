import { Router } from "express";
import studentsHandler from "./handler.js";
const route = Router();

route.post  ('/', studentsHandler.add    )
route.get   ('/', studentsHandler.list   )
route.get   ('/:id', studentsHandler.single )
route.put   ('/:id', studentsHandler.update )
route.delete('/:id', studentsHandler.delete )

export default route;
