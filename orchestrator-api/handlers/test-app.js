const express = require('express');

const router = express.Router();
const useCase = require('../use-cases/get-blocked-users');

router.get('', async (req, res) => {
  try {
    if (req.headers.authorization === '2') {
      const list = await useCase(req.body.action);
      const result = {
        success: true,
        data: list,
      };
      res.status(200).json(result);
    } else res.status(401).json({ message: 'Unauthorized' });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
    // eslint-disable-next-line no-console
    console.log(error.stack);
  }
});

module.exports = router;
