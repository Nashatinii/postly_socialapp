import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Heart } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Container, Card, TextField, Button, Typography, List, ListItem } from '@mui/material';
//sx={{ width: '50%' }}
const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        console.log('====================================');
        console.log('id:', id);
        console.log('====================================');
        const postsResponse = await axios.get(`http://localhost:5000/api/posts`);

        const foundPost = postsResponse.data.find(post => post._id === id);
        console.log('====================================');
        console.log('foundPost:', foundPost);
        console.log('====================================');
        if (foundPost) {
          setPost(foundPost);
          console.log(foundPost.userID);
          const userResponse = await axios.get(`http://localhost:5000/api/users`);
          console.log('====================================');
          console.log(userResponse.data);
          console.log('====================================');
          const Creator = userResponse.data.users.find(user => user._id === foundPost.userID);

          setUser(Creator);
          setComments(foundPost.comments || []);
        } else {
          console.error('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post:', error.message);
      }
      finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [id]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    setComments((prevComments) => [...prevComments, comment]);
    setComment('');
  };

  if (loading) {
    return (
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Loading...
        </Typography>
      </Container>
    );
  }

  return (
    <Container >
      <Card variant="outlined" sx={{ p: 2, mt: 2 }}>
        <div>
          <Typography variant="body2" color="text.secondary">
            By <Link to={`/user/${user.id}`}>{user.username}</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </Typography>
        </div>
        <Typography variant="h4" component="h1" gutterBottom>
          {post.title}
        </Typography>
        
        {post.img && (
          <img
            src={post.img}
            onError={(e) => {
              e.target.src = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
            }}
            alt=""
            className="w-full mb-4 rounded-lg"
          />
        )}
        <Typography variant="body1" component="p" gutterBottom>
          {post.desc}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <Typography variant="body2" color="text.secondary">
            <Heart size={20} fill="#FF0000" /> {post.likes} Likes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {comments.length} Comments
          </Typography>
        </div>
        <div style={{ marginTop: '20px' }}>
          <TextField
            variant="outlined"
            label="Add a comment..."
            fullWidth
            value={comment}
            onChange={handleCommentChange}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
            onClick={handleSubmitComment}
          >
            Add Comment
          </Button>
        </div>
        <List style={{ marginTop: '20px' }}>
          {comments.map((comment, index) => (
            <ListItem key={index} sx={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}>
              {comment}
            </ListItem>
          ))}
        </List>
      </Card>
    </Container>
  );
};

export default PostDetails;
