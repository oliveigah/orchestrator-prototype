const express = require('express');

const router = express.Router();

const testService = require('../services/test-service');

router.get('/service1', async (req, res) => {
    try {
        testService.dependencies = () => ({
          service: 'http://localhost:3001/test'
        })
        const result = await testService();
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

router.get('/service2', async (req, res) => {
  try {
      testService.dependencies = () => ({
        service: 'http://localhost:3002/test'
      })

      const result = await testService();
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

router.get('/service3', async (req, res) => {
  try {
      testService.dependencies = () => ({
      service: 'http://localhost:3003/test'
      })
      const result = await testService();
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
