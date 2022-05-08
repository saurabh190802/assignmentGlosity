import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postEvent.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const { title, message, date, month, image } = req.body;

    const newPostMessage = new PostMessage({
      title,
      message,
      date,
      month,
      image,
    });

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}







export default router;