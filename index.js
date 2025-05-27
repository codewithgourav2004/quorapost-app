const express = require('express')
const app = express()
let ejs = require('ejs');
app.set('view engine', 'ejs')
const path = require('path')
app.use(express.static('public'))
const port = 3000
app.use(express.urlencoded({ extended: true }));

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

const { v4: uuidv4 } = require('uuid');
// const id = uuidv4();


let data = [
    {
        name: 'gourav',
        content: 'this is realted to gourav content page',
        id: uuidv4()
    },
    {
        name: 'Skill',
        content: 'this is realted to gourav content page',
        id: uuidv4()
    },
    {
        name: 'Earn',
        content: 'this is realted to gourav content page',
        id: uuidv4()
    },
    {
        name: 'Education',
        content: 'this is realted to gourav content page',
        id: uuidv4()
    },
    {
        name: 'Foundation',
        content: 'this is realted to gourav content page',
        id: uuidv4()
    },
]
// console.log(data)

app.get('/post', (req, res) => {
    console.log(data);
    res.render('post', { data });
});
app.get('/post/new', (req, res) => {
    res.render('new')

})
app.post('/post', (req, res) => {
    let { name, content } = req.body;
    const id = uuidv4(); // ✅ generate new ID here
    data.push({ name, content, id });
    res.redirect('/post');
});
app.get('/post/:id', (req, res) => {
    let { id } = req.params
    let m = data.find((p) => id === p.id)
    res.render('show', { m });
});
app.delete('/post/:id', (req, res) => {
    const { id } = req.params;
    data = data.filter(p => p.id !== id);
    res.redirect('/post');
});


app.patch('/post/:id', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const m = data.find(p => p.id === id);
    m.content = content;
    res.redirect('/post')

});

app.get('/signup', (req, res) => {
    res.render('signup');
});

// userStore.js
let users = [];

function saveUser(user) {
    users.push(user);
}

function getAllUsers() {
    return users;
}

module.exports = { saveUser, getAllUsers };


app.post('/signup', (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    saveUser(user);
    res.redirect('/signin');
});

app.get('/userdata', (req, res) => {
    const users = getAllUsers();
    res.render('userdata', { users });
});
// Show sign in form
app.get('/signin', (req, res) => {
    res.render('signin', { error: null });
});

// Handle sign in logic
app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    const users = getAllUsers();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Success: redirect to user data page or dashboard
        res.redirect('/post/new');
    } else {
        // Failure: show error on sign in page
        res.render('signin', { error: 'Invalid username or password' });
    }
});




app.listen(port, () => {
    console.log(`you are working on port ${port}`)
})