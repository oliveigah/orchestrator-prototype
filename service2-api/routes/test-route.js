const express = require('express');

const router = express.Router();
const testService = require('../services/test-service');

router.get('/', async (req, res) => {
  try {
    const result = await testService.execute();
    result.success = true;
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.name}: ${error.message}`,
    });
    // eslint-disable-next-line no-console
    console.log(error.stack);
  }
});

module.exports = router;
