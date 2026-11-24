const express = require('express');
const cors = require('cors');
require('dotenv').config();

const eventRoutes = require('./routes/events');
const userRoutes = require('./routes/users');
const registrationRoutes = require('./routes/registrations');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'EventFlow API running' }));

app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/registrations', registrationRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`EventFlow API running on port ${PORT}`));
