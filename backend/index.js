// // // const mysql = require('mysql2');
// // // var express = require('express');
// // // var bodyParser = require('body-parser');

// // // const { request, response } = require('express');
// // // var app  = express();
// // // var router = express.Router();
// // // // create a new MySQL connection
// // // const connection = mysql.createConnection({
// // //   host: 'localhost',
// // //   port:3305,
// // //   user: 'root',
// // //   password: 'akash',
// // //   database: 'dsrt'
// // // });
// // // // connect to the MySQL database
// // // connection.connect(function (err) {
// // //     if (err) {
// // //         console.log("Error in the connection")
// // //         console.log(err)
// // //     }
// // //     else {
// // //         console.log(Database Connected)
// // //         connection.query(SHOW DATABASES,
// // //             function (err, result) {
// // //                 if (err)
// // //                     console.log(Error executing the query - ${err})
// // //                 else
// // //                     console.log("Result: ", result)
// // //             })
// // //     }
// // // })
// // // // close the MySQL connection

// // // connection.end()  
// // const express = require('express');
// // const app = express();
// // const bodyParser = require('body-parser');
// // // const bcrypt = require('bcrypt');
// // const mysql = require('mysql');
// // const cors = require('cors');

// // Configure the database connection
// // const connection = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   port:3306,
// //   password: 'akash',
// //   database: 'dsrt',
// // });

// // connection.connect((err) => {
// //   if (err) {
// //     console.error('Database connection error:', err);
// //     return;
// //   }
// //   console.log('Connected to the database');
// // });

// // // Parse JSON request bodies
// // app.use(bodyParser.json());
// // app.use(cors());
// // // app.use(express.json())



// // // Register user endpoint
// // // app.post('/user/register', (req, res) => {
// // //   try {
// // //     console.log(req);
// // //     let { name, username, password } = req.body;
// // //     console.log('Received registration data:', req.body);

// // //     // Validate the request
// // //     if (name && username && password) {
// // //       const hashedPassword = bcrypt.hashSync(password, 10);

// // //       // Check if the username already exists
// // //       const checkUsernameQuery = SELECT * FROM users WHERE username = ?;
// // //       connection.query(checkUsernameQuery, [username], (err, result) => {
// // //         if (err) {
// // //           console.error('Registration query error:', err);
// // //           res.status(201).json({ message: 'An error occurred' });
// // //         } else if (result.length > 0) {
// // //           // Username already exists
// // //           console.log('Username already exists:', username);
// // //           res.status(201).json({ message: 'Username already exists' });
// // //         } else {
// // //           // Insert the data into the database
// // //           const insertUserQuery = INSERT INTO users (name, username, password) VALUES (?, ?, ?);
// // //           connection.query(insertUserQuery, [name, username, hashedPassword], (err, result) => {
// // //             if (err) {
// // //               console.error('Failed to register user:', err);
// // //               res.status(201).json({ message: 'Failed to register user' });
// // //             } else {
// // //               const user = {
// // //                 id: result.insertId,
// // //                 username: username,
// // //               };
// // //               console.log('User registered successfully:', user);
// // //               res.status(201).json({ message: 'User registered successfully', user });
// // //             }
// // //           });
// // //         }
// // //       });
// // //     } else {
// // //       console.log('Invalid registration request:', req.body);
// // //       res.status(201).json({ message: 'Invalid request' });
// // //     }
// // //   } catch (error) {
// // //     console.error('Error parsing request body:', error);
// // //     res.status(201).json({ message: 'Invalid JSON data' });
// // //   }
// // // });

// // // Authenticate user endpoint
// // // app.post('/user/authenticate', (req, res) => {
// // //   try {
// // //     const { username, password } = req.body;
// // //     console.log('Received authentication data:', req.body);

// // //     // Validate the request
// // //     if (username && password) {
// // //       // Check if the username exists in the users table
// // //       const sql = SELECT * FROM users WHERE username = ?;
// // //       connection.query(sql, [username], (err, result) => {
// // //         if (err) {
// // //           console.error('Authentication query error:', err);
// // //           res.status(500).json({ message: 'Database query failed' });
// // //         } else if (result.length > 0) {
// // //           const user = result[0];

// // //           // Verify the password
// // //           const hashedPassword = user.password;
// // //           if (bcrypt.compareSync(password, hashedPassword)) {
// // //             // Password is correct, user is authenticated
// // //             const response = {
// // //               authenticated: true,
// // //               'mobile/email': user.username,
// // //               name: user.name,
// // //             };
// // //             console.log('User authenticated:', user.username);
// // //             res.json(response);
// // //           } else {
// // //             // Password is incorrect
// // //             console.log('Incorrect password for user:', user.username);
// // //             res.json({ authenticated: false, debug: 'Incorrect password' });
// // //           }
// // //         } else {
// // //           // Username does not exist
// // //           console.log('Username does not exist:', username);
// // //           res.json({ authenticated: false, debug: 'Username does not exist' });
// // //         }
// // //       });
// // //     } else {
// // //       console.log('Invalid authentication request:', req.body);
// // //       res.status(201).json({ message: 'Invalid request' });
// // //     }
// // //   } catch (error) {
// // //     console.error('Error parsing request body:', error);
// // //     res.status(201).json({ message: 'Invalid JSON data' });
// // //   }
// // // });

// // // Start the server
// // app.listen(3001, () => {
// //   console.log('Server is running on port 3001');
// // });
// // const {createPool}=require('mysql') ;
// // const pool = createPool({
// //     host:"localhost",
// //     user:"root",
// //     port:3305,
// //     password:"akash",
// //     // database:"dsrt",
// //     // connectionLimit:10 
// // })

// // pool.query(SELECT * FROM dsrt.login;,(err,result,fields)=>{
// //     if(err){
// //         return console.log(err)
// //     }
// //     return console.log(result)
// // })

// // const express = require('express');
// // const app = express();
// // const bodyParser = require('body-parser');
// // const bcrypt = require('bcrypt');
// // const mysql = require('mysql');
// // const cors = require('cors');

// // var  Db = require('./dboperations');
// // var  Order = require('./Order');
// // var  express = require('express');
// // var  bodyParser = require('body-parser');
// // var  cors = require('cors');
// // var  app = express();
// // var  router = express.Router();

// // app.use(bodyParser.urlencoded({ extended:  true }));
// // app.use(bodyParser.json());
// // app.use(cors());
// // app.use('/api', router);

// // var connection = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'sqluser',
// //   password: 'password',
// //   database:'dsrt',
// //   port: 3306,  
// // });

// //Parse JSON request bodies
// app.use(bodyParser.json());
// app.use(cors());
// // app.use(express.json())
// // connection.connect(function(err) {
// //   if (err) throw err;
// //   console.log("Connected!");
// // });

// // var  Db = require('./dboperations');
// ''''''''''''''''''''''
// const jwt = require('jsonwebtoken');
// const db = mysql.createConnection({
//     user:  'sqluser', // sql user
//     password:  'password', //sql user password
//     server:  '127.0.0.1', // if it does not work try- localhost
//     database:  'dsrt',
//     options: {
//       trustedconnection:  true,
//       enableArithAbort:  true,
//       instancename:  'SQLEXPRESS'  // SQL Server instance name
//     },
//     port:3306
//   });
  
//   const pool = mysql.createPool(db);

// app.use((request, response, next) => {
//     console.log('middleware');
//     next();
//   });

//   app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       // Get a connection from the pool
//       const connection = await pool.getConnection();
  
//       // Query the database to find a user with the provided username and password
//       const [rows] = await connection.execute('SELECT * FROM login WHERE username = ? AND password = ?', [username, password]);
  
//       // Release the connection back to the pool
//       connection.release();
  
//       if (rows.length === 0) {
//         return res.status(401).json({ message: 'Invalid username or password' });
//       }
  
//       // Create a JWT token
//       const token = jwt.sign({ user: { id: rows[0].id, username: rows[0].username } }, secretKey, {
//         expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
//       });
  
//       res.json({ token });
//     } catch (error) {
//       console.error('Error during authentication:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });
  
  
//   ''''''''''''''''''''''''''''''''''


// //   app.get('/login', (req, res) => {
//   //   router.route('/login').get((req, res) => {
//   //   const query = 'SELECT * FROM login';
//   //   // console.log(query)
//   //   // Execute the query
//   //   db.query(query, (err, results) => {
//   //     if (err) {
//   //       console.error('Error executing query:', err);
//   //       res.status(500).send('Internal Server Error');
//   //       return;
//   //     }
  
//   //     // Send the results as JSON
//   //     // console.log(results)
//   //     res.json(results);
//   //   });
//   // });
  

//   // router.route('/orders').get((request, response) => {
//   //   Db.getLogin().then((data) => {
//   //     response.json(data);
//   //   })
//   // })\
//   '''''''''''''''''
// var  port = process.env.PORT || 8090;
// app.listen(port);
// console.log('Order API is runnning at ' + port);
// '''''''''''
// // ......................................................................
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const mysql = require('mysql');
// const cors = require('cors');

// var  Db = require('./dboperations');


// app.use(bodyParser.urlencoded({ extended:  true }));
// app.use(bodyParser.json());
// app.use(cors());

// server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const mysql = require('mysql2/promise');

// const app = express();
// // const port = 3306;
// const secretKey = 'your-secret-key'; // Change this to a strong and unique secret key

// // MySQL database connection configuration
// const dbConfig = {
//   host: '127.0.0.1',
//   user: 'sqluser',
//   password: 'password',
//   database: 'dsrt',
//   port:3306
// };



// // Create a MySQL connection pool
// const pool = mysql.createPool(dbConfig);

// app.use(bodyParser.json());

// ...

// server.js
const express = require('express');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const cors = require('cors'); // Import the cors middleware

const app = express();
// y
const port = 3000;
const secretKey = 'your-secret-key'; // Change this to a strong and unique secret key

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'sakthi',
    database: 'dsrt',
    // port:3306
  };

const pool = mysql.createPool(dbConfig);

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

// ... (rest of your code)



// Login endpoint
app.post('/login', async (req, res) => {
  // console.log("hii")
  const { username, password } = req.body;

  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Query the database to find a user with the provided username and password
    const [rows] = await connection.execute('SELECT * FROM login WHERE user_id = ? AND password = ?', [username, password]);
    console.log(rows);

    // Release the connection back to the pool
    connection.release();

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }


    // Create a JWT token
//    const token = jwt.sign({ user: { id: rows[0].id, username: rows[0].username } }, secretKey, {
//      expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
//    });
//    // console.log(token)
//    res.json({ token });
if (rows) {
    // Successful login
    console.log(rows[0].type)
    res.json({ success: true, userType: rows[0].type });

  } else {
    // Failed login
    res.json({ success: false });
  }

  } catch (error) {
    console.error('Error during authentication:', error);
       res.status(500).json({ message: 'Internal Server Error' });
     }
   });

   app.post('/profile/student', async (req, res) => {
//     console.log("hii")
     const { username } = req.body;
//     console.log(username)

     try {
       // Get a connection from the pool
       const connection = await pool.getConnection();

       // Query the database to find a user with the provided username and password
//       const [rows] = await connection.execute('SELECT * FROM students_detail WHERE student_id = ? ', [username]);
       console.log(username)
       const [rows] = await connection.execute('SELECT * FROM students_detail where student_id = ?',[username]);

       console.log(rows);

       // Release the connection back to the pool
       connection.release();

       if (rows.length === 0) {
         return res.status(401).json({ message: 'Invalid username or password' });
       }


       // Create a JWT token
   //    const token = jwt.sign({ user: { id: rows[0].id, username: rows[0].username } }, secretKey, {
   //      expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
   //    });
   //    // console.log(token)
   //    res.json({ token });
   if (rows) {
       // Successful login
       console.log(rows[0].type)
       res.json({ success: true,address_student_state:rows[0].address_student_state,address_student_district:rows[0].address_student_district,address_student_street:rows[0].address_student_street,address_student_door_no:rows[0].address_student_door_no,student_email:rows[0].student_email ,Student_standard:rows[0].Student_standard ,student_name:rows[0].student_name,student_mobile_no: rows[0].student_mobile_no });

     } else {
       // Failed login
       res.json({ success: false });
     }

     } catch (error) {
       console.error('Error during authentication:', error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      });

// app.listen(port, () => {
//   console.log(Authentication API is running on http://localhost:${port});
// });
// var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);