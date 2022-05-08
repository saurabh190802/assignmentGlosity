import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    date: Number,
    month: String,
    image: String,
})

var PostEvent = mongoose.model('PostEvent', postSchema);

export default PostEvent;