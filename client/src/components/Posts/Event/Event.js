import React from 'react';
import { Card,  CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

const Event = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(post)
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.image ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.date}</Typography>
        <Typography variant="body2">{post.month}</Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.message}
        </Typography>
      </div>

     
    </Card>
  );
};

export default Event;
