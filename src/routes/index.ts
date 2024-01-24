import { Router } from 'express';
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';

const router = Router();

router.get('/', pageController.homePage);
router.get('/dogs', pageController.dogsPage);
router.get('/cats', pageController.catsPage);
router.get('/fish', pageController.fishPage);

router.get('/search', searchController.search);

export default router;
