import express from 'express';
import { getArticlesPage } from '../../controllers/pages/Articles.js';

const router = express.Router();

router.get( '/', getArticlesPage );

export default router;