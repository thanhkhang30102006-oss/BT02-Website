require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT;

const PUSHBULLET_TOKEN = process.env.PUSHBULLET_TOKEN

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Khi user nhap tin nhan gui ve pushbullet
app.post('/api/message', async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Nội dung trống' });

    try {
        await axios.post('https://api.pushbullet.com/v2/pushes', {
            type: 'note',
            title: 'Lời nhắn mới từ Website User!',
            body: message
        }, {
            headers: {
                'Access-Token': PUSHBULLET_TOKEN,
                'Content-Type': 'application/json'
            }
        });
        res.json({ success: true, message: 'Đã gửi đến điện thoại thành công!' });
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Lỗi gửi Pushbullet' });
    }
});
// gui tu dien thoai len banner web
app.get('/api/banner', async (req, res) => {
    try {
        const response = await axios.get('https://api.pushbullet.com/v2/pushes?limit=1', {
            headers: { 'Access-Token': PUSHBULLET_TOKEN }
        });
        const pushes = response.data.pushes;
        if (pushes && pushes.length > 0) {
            const latest = pushes[0].body || pushes[0].title;
            return res.json({ banner: latest });
        }
        res.json({ banner: "Chào mừng bạn ghé thăm website cá nhân!" });
    } catch (error) {
        res.json({ banner: "Chào mừng bạn ghé thăm website cá nhân!" });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server Node.js đang chạy tại cổng ${PORT}`);
});