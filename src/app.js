import express from 'express';
import userRoutes from './routes/userRoutes.js'; // Pastikan path benar

const app = express();
app.use(express.json()); 
// Tambahkan middleware untuk parsing JSON
app.use('/api/users', userRoutes); // Gunakan router



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
