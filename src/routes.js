import { Router } from "express";
import controlador from "./controllers.js";

const router = Router();

router.get("/", controlador.index);
router.get("/:id", controlador.show);
router.post("/", controlador.store);
router.put("/:id", controlador.update);
router.delete("/:id", controlador.destroy);


export default router;