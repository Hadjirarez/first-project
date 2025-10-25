
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();


app.use(cors()); 
app.use(express.json()); 


mongoose.connect('mongodb://localhost:27017/users-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);


async function addFirstUser() {
  const count = await User.countDocuments();
  if (count === 0) {
    await User.create({
      email: "email@gmail.com",
      password: "password1"
    });
    console.log("First user added to DB");
  }
}
addFirstUser();


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
