import { Router } from "express";
import studentsHandler from "./handler.js";
const route = Router();

// route.post  ('/', studentsHandler.add    )
route.get   ('/', studentsHandler.list   )
// route.get   ('/', studentsHandler.single )
// route.put   ('/', studentsHandler.update )
// route.delete('/', studentsHandler.delete )

export default route;
