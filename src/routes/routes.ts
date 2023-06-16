import express, { Request, Response, Router } from "express";
import * as dataController from "../controllers/controllers";

const router: Router = express.Router();

// GET /

router.get("/example", (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default router;
