const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = {
            hello: 'World',
        };
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json(error);
    }
});

module.exports = router;
