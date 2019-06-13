#Project pointers
1. npm init -y    ====== create predefined package.json
2. npm i express bcryptjs jsonwebtoken config express-validator mongoose
    a. express  === server
    b. bcryptjs === hashing password
    c. jsonwebtoken === authentication
    d. config === global variable
    e. express-validator === validate any data coming to server
    f. mongoose === abstraction of db
3. dev dependencies installation:
    npm i -D nodemon concurrently
        a. nodemon === automatic restart of server
        b. concurrently === run front backend server simultaneously
4. run server using nodemon for automatic refresh using package.json
    npm run server
5. POSTMAN  when posting data
    input middleware ===> app.use(express.json({ extended: false}));
    in app select "Headers" = "Content-Type" = "application/json"
    in body input json data ===> 
        {
            "name": "John Doe",
            "email": "epal@gmail.com",
            "password": "1234"
        }
6. jwt.io check data sent using encoded token

latest link
https://www.udemy.com/modern-react-front-to-back/learn/lecture/14969974#content

