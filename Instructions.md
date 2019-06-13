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
