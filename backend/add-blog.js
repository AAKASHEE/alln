const axios = require('axios');

const addBlog = async () => {
  try {
    const response = await axios.post('http://localhost:3001/api/links', {
      title: 'BLOggn',
      url: 'https://b-l-a-g.vercel.app/',
      type: 'social',
      gradient: 'from-indigo-600 via-purple-600 to-violet-600'
    });
    console.log('Blog added:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};

addBlog();