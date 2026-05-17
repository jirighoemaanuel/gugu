import express from 'express';
import SearchDocument from '../models/SearchDocument.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const documents = await SearchDocument.find().sort({ createdAt: -1 });
    res.json(documents);
  } catch (error) {
    next(error);
  }
});

router.get('/search', async (req, res, next) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const documents = await SearchDocument.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
      ],
    });

    // const documents = await SearchDocument.find(
    //   { $text: 
    //     { $search: query } 
    //   },
    //   { score: 
    //     { $meta: 'textScore' } 
    //   }
    // ).sort({ score: { $meta: 'textScore' } });

    res.json(documents);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const document = await SearchDocument.create({
      title: req.body.title,
      url: req.body.url,
      content: req.body.content,
    });

    res.status(201).json(document);
  } catch (error) {
    next(error);
  }
});

export default router;
