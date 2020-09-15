const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    const snippet = `<h1> Hello World from the Refactored Root Route! </h1>`;
    res.status(200).send(snippet).end();
});

module.exports = router;