import axios from 'axios';

export default async function handler(req, res) {
  const { q } = req.query; // 'q' is the search query parameter

  try {
    const response = await axios.get(
      `https://jobbatao.com/wp-json/wp/v2/posts?search=${q}`
    );

    const results = response.data;

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching search results.' });
  }
}
