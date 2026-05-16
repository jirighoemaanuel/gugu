import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
