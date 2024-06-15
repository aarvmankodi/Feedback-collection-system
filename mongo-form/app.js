const express = require('express')
const cors = require('cors')
const { connectToDb , getDb} = require('./db-conn')
const bcrypt = require('bcrypt');
var ObjectId = require('mongodb').ObjectId; 

// const multer = require('multer');

//initialize app & middleware
const app = express()
app.use(cors())
app.use(express.json())

//database connection
let db
connectToDb((err) => {
    if (!err){
        app.listen(3001, () =>
            {
                console.log("app is now listening on 3001")
        })
        db = getDb()
    }
})

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

//routes
app.get('/user-forms/formA' , (req,res) => {

    let users = []

    db.collection('form A')
    .find()
    .sort( { name : 1 })
    .toArray() // Convert cursor to array
    .then((result) => {
        users = result; // Store sorted users
        res.status(200).json(users); // Send response
    })
    .catch(() => {
        res.status(500).json({error : "Unable to fetch users"})
    }) 
})

app.get('/user-forms/formB' , (req,res) => {

    let users = []

    db.collection('form B')
    .find()
    .sort( { name : 1 })
    .toArray() // Convert cursor to array
    .then((result) => {
        users = result; // Store sorted users
        res.status(200).json(users); // Send response
    })
    .catch(() => {
        res.status(500).json({error : "Unable to fetch users"})
    }) 
})

app.get('/user-forms/formC' , (req,res) => {

    let users = []

    db.collection('form C')
    .find()
    .sort( { name : 1 })
    .toArray() // Convert cursor to array
    .then((result) => {
        users = result; // Store sorted users
        res.status(200).json(users); // Send response
    })
    .catch(() => {
        res.status(500).json({error : "Unable to fetch users"})
    }) 
})

app.get('/user-forms/formD' , (req,res) => {

    let users = []

    db.collection('form D')
    .find()
    .sort( { name : 1 })
    .toArray() // Convert cursor to array
    .then((result) => {
        users = result; // Store sorted users
        res.status(200).json(users); // Send response
    })
    .catch(() => {
        res.status(500).json({error : "Unable to fetch users"})
    }) 
})

app.get('/user-forms/formA/:name' , (req,res) => {
    
    db.collection('form A')
    .findOne({name : req.params.name})  
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(() => {
        res.status(500).json({error : "Unable to fetch user(s)"})
    })
})


app.post('/user-forms', async (req,res) => {
    const { form ,name, rating, rating2, rating3, email, dob, address, location, github, feedback, reference, recommend, password } = req.body;
    if (form === 'Account'){
        const hashedPassword = await bcrypt.hash(password, 10);
        db.collection('Accounts')
        .insertOne(
          
            { name: name,email: email, password: hashedPassword } , 
            { upsert: true } 
        )
        .then(result => {
            console.log(result)
            res.status(201).json({message : "User registered successfully"}); 
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: "Could not create/update user" });
        });
    }

    else if (form === 'Account-client'){
        const hashedPassword = await bcrypt.hash(password, 10);
        db.collection('Account-client')
        .insertOne(
          
            { name: name, password: hashedPassword } , 
            { upsert: true } 
        )
        .then(result => {
            res.status(200).json({message : "User registered successfully"}); 
        })
        .catch(err => {
            res.status(500).json({ err: "Could not create/update user" });
        });
    }

    else if (form === 'A'){
        db.collection('form A')
        .insertOne(
          
            { name: name,email: email, rating: rating } , 
            { upsert: true } 
        )
        .then(result => {
            res.status(201).json(result); 
        })
        .catch(err => {
            res.status(500).json({ err: "Could not create/update user" });
        });
    }
    else if (form === 'B'){
        db.collection('form B')
        .insertOne(
            { name: name, email: email, dob: dob, address: address, location: location, github:github } , 
            { upsert: true } 
        )
        .then(result => {
            res.status(201).json(result); 
        })
        .catch(err => {
            res.status(500).json({ err: "Could not create/update user" });
        });
    }
    else if (form === 'C'){
        db.collection('form C')
        .insertOne(
            { name: name, email: email, rating: rating, feedback: feedback } , 
            { upsert: true } 
        )
        .then(result => {
            res.status(201).json(result); 
        })
        .catch(err => {
            res.status(500).json({ err: "Could not create/update user" });
        });
    }
    else if (form === 'D'){
        db.collection('form D')
        .insertOne(
            {  name: name, email: email, rating1: rating, rating2: rating2, rating3: rating3,reference: reference, recommend: recommend, feedback: feedback } , 
            { upsert: true } 
        )
        .then(result => {
            res.status(201).json(result); 
        })
        .catch(err => {
            res.status(500).json({ err: "Could not create/update user" });
        });
    }
   
})

app.post('/login', async (req, res) => {
    const { form, email, password , name } = req.body;

    try {
        if ( form === 'Account'){
            const user = await db.collection('Accounts').findOne({ email });

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid)
                res.status(200).json({ message: 'Login successful' });
            else
            res.status(201).json({ error: 'Invalid credentials' });
        } else {
            res.status(404).json({ error: 'User Not Found' });
        }
        } else if (form === 'Account-client'){
            const user = await db.collection('Account-client').findOne({ name });

            if (user) {
                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (isPasswordValid)
                    res.status(200).json({ message: 'Login successful' });
                else
                res.status(201).json({ error: 'Invalid credentials' });
            } else {
                res.status(404).json({ error: 'User Not Found' });
            }
        }
        
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/user-forms/all-users', async (req, res) => {
    try {
        const users = await db.collection('Accounts').find().toArray();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/user-forms/all-user-accounts', async (req, res) => {
    try {
        const users = await db.collection('Accounts').find({}, { projection: { name: 1, email: 1, _id: 0 } }).toArray();
        
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users from Accounts table:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/user-forms/history' , async (req,res) => {
    try {
        console.log(req.body)
        const message = req.body.message;
        db.collection('history')
        .insertOne({
            message : message.msg,
            type : message.type,
            createdAt : message.date
        }).then(result => {
            res.status(201).json(result); 
        })
        .catch(err => {
            res.status(500).json({ err: "couldnt add history" });
        });
    } catch (e) {
        console.log(e);
    }
})

app.get('/getHistory' , async (req,res) => {
    const types  = req.query.type;
    try{
        const history = await db.collection('history')
        .find({type : types}).toArray();
        res.status(200).json(history);
    } catch (E) {
        console.log(E);
        res.status(400).json({message : "nope dont got none"});
    }
})

app.get('/getUser' , async (req,res) => {
    try{
        const number = await db.collection('Accounts')
        .find()
        .toArray();
        console.log(number.length)
        res.status(200).json(number.length);
    }catch (E) {
        console.log(E);
        res.status(400).json({message : "nope dont got none"});
    }
})

app.post('/delete' , async (req,res) => {
    const { _id } = req.body.user;
    const form = req.body.form;
    var o_id = new ObjectId(_id);
    console.log(o_id);
    const result = await db.collection(form).deleteOne({"_id": o_id });
     if (result.deletedCount === 1) {
        res.status(200).json({ message: 'deleted' });
      } else {
        res.status(404).json({ message: 'Document not found' });
      }

})




