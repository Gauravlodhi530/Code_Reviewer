import aiservice from '../services/ai.service.js';

const getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send('Code is required.');
  }

  try {
    const response = await aiservice(code);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export default { getReview };
