# cinemagic-express

Member: Daniel Fu, Michael Trinh, Jessica Wu, Nhung Tran (Charlene), Tiffany Tu
- Michael: Firebase with GG authentication
- Charlene Tran: Login/ Logout pages and styled component, Database design, Clean up modular code
- Tiffany: UI design, Database design, Clean up modular code
- Jessica: Fucntion to make the request, Database design, Clean up modular code
- Daniel: MongoDB, correctness of implementing, Express, routers and controllers.

# Auth
auth.js: we want to verify the token by using JWT, and if there is no error, we will be able to save the user data. 

# Controller 
user.js: request to get the name, email and password. We also want to let the user know the signup and login status (err codes and handling) to check if the user successfully or fail to login. And send use res.send(token) to varify the user id. We don't want the user login again if it is already login. 

# Models
user.js: we want to use bcryptjs to build a password security platform and store hashses in our password DB. Also, we want to use mongodb to compare password. Then we want to load hash from the password DB and use Sync so that we wait the system to compare the password with the database. return true means correct password and then we continue.

# routes
user.js: functions to make the request. Router to do post request and ask post to login and sign up. 

index.js: connect to the database by using mongoose and make the server running on 3000

# link: https://cinemagic-coral.vercel.app/
