import { Router } from 'express';
import handleGetTest from './test.controller.js';

const router = Router();

// GET /api/test
router.get('/', handleGetTest);

export default router;
