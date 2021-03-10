const express = require("express");
const bodyParser = require("body-parser");
const NodeCache = require("node-cache");
const cache = new NodeCache();

const app = express();

app.use(
  bodyParser.json({
    type: function () {
      return true;
    },
  })
);

app.post("/set", async (req, res, next) => {
  try {
    const body = req.body;

    if (!body.key) {
      return res.status(400).json({ message: `Key is required` });
    }

    if (cache.has(body.key)) {
      return res.status(400).json({ message: `${body.key} has already been created` });
    }

    cache.set(String(body.key), String(body.value));

    res.json(body);
  } catch (err) {
    console.log(err);
    res.status(500).json(JSON.stringify(err));
    next();
  }
});

app.post("/delete", async (req, res, next) => {
  try {
    const body = req.body;

    if (!body.key) {
      return res.status(400).json({ message: `Key is required` });
    }

    if (!cache.has(body.key)) {
      return res.status(200).json({ message: `${body.key} does not exist` });
    }

    cache.del(body.key);

    res.json({key: body.key} );
  } catch (err) {
    console.log(err);
    res.status(500).json(JSON.stringify(err));
    next();
  }
});

app.get("/get", async (req, res, next) => {
  try {
    const { key } = req.query;

    if (!key) {
        return res.status(400).json({message: `Key is required`});
    }

    const value = cache.get(key);

    if (value == undefined) {
      return res.status(400).json({ message: `${key} does not exist` });
    }

    res.json({ key, value });
  } catch (err) {
    console.log(err);
    res.status(500).json(JSON.stringify(err));
    next();
  }
});

app.listen(4000);

console.log("Listening on port 4000");
