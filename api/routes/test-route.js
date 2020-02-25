const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = {
            success: true,
            hello: 'World',
        };
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
