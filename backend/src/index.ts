import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.get('/api', (req, res) => {
    res.send('Hello from the backend!');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
