

import express from 'express';
const router = express.Router();

router.get('', async () => {
    return 'hello';
})

export {router};

