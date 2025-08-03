import express from "express";
import cors from 'cors';

import {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} from './controllers/userController.js';
import {
    createProduct,
    searchProducts
} from './controllers/productController.js';
import { login } from './controllers/authController.js';
import {
    home,
    heavyTask,
    getData,
    getAsyncData
} from './controllers/generalController.js';

const app = express();
app.use(express.json())

app.use(cors())

app.get('/', home);

app.get('/users', getAllUsers);

app.post('/users', createUser);

app.get('/users/:id', getUserById);

app.put('/users/:id', updateUser);

app.delete('/users/:id', deleteUser);

app.post('/products', createProduct);

app.get('/search', searchProducts);

app.get('/heavy-task', heavyTask);

app.post('/login', login);

app.get('/api/data', getData);

app.get('/async-data', getAsyncData);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});