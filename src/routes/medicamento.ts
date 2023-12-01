import { Router } from "express";
import { getAll } from "../controllers/medicamentos";

const router = Router();

router.get("/", getAll);

export default router;
