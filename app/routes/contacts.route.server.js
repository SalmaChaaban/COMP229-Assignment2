import { Router } from "express";

import { DisplayContactsList, 
    DisplayContactsAddPage } from "../controllers/contacts.controller.server.js";

const router = Router();

router.get('/contact-list', DisplayContactsList);
router.get('/contact-add', DisplayContactsAddPage);

export default router;