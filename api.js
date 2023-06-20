const defaultt = (req, res) => {
    res.send("This is the Default path!!!!!!!!!!!")
};

const login = (req, res) => {
    res.send({
        Message: "LOGIN",
        Emailid: "Enter your Emailid",
        Password:"Enter ur password"
    });
};

const signup = (req, res) => {
    res.send({
        messasge: "SIGNUP",
        Name: "Enter your Name",
        Emailid: "Enter your Emailid",
        Password:"Enter ur password",
        Confirm_Password:"Confirm Your Password"
    });
};

const main = (req, res) => {
    res.send([
        {
            Express:"Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.The original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack, together with the MongoDB database software and a JavaScript front-end framework or library."},
        {
        Author: "SHAIK",
        license: "ISC",
        dependencies: 
        {
          express: "^4.18.2",
          nodemon: "^2.0.22",
        }
    }]);
};

module.exports={login,signup,main,defaultt};