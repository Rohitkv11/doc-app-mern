import express from "express";
import contact from "../controller/contact.js";

const router = express.Router();
 
//routes
router.post("/contact",contact);

export default router;
