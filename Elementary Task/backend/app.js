const express = require('express');
const bodyParser = require('body-parser');
const { saveContactForm } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('frontend'));

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    saveContactForm({ name, email, message })
        .then(() => res.status(200).json({ message: 'Form submitted successfully!' }))
        .catch(error => res.status(500).json({ message: 'Error submitting form.', error }));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
