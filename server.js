const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));

app.get('/download', async (req, res) => {
  const url = req.query.url;
  try {
    const data = await axios.get(`https://tikwm.com/api/?url=${encodeURIComponent(url)}`);
    res.redirect(data.data.data.play);
  } catch {
    res.send("خطأ في تحميل الفيديو");
  }
});

app.listen(10000);
