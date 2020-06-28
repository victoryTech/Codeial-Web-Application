const { session } = require("passport");

const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            // it should be your email id and password
            user: 'biekymahato@gmail.com',
            pass: 'Anjali@5829'
        }
    },
    google_client_id: "77191652178-ig8005av1fuekp53q4sd4hatb1s9g4jj.apps.googleusercontent.com", // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
    google_client_secret: "cbrBo0XkJHvAT2bAsVa9j7Hd", // e.g. _ASDFA%KFJWIASDFASD#FAD-
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial',
}




const production = {
    name: 'production'
}



module.exports = development;