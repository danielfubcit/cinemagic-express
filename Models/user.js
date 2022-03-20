const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    email: {type:String, 
        required:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {type:String, required:true}
});

//before saving
UserSchema.pre('save', function(next){
    const user = this

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB.
            user.password = hash
            //move on to the next function so that it dose not get stuck
            next()
        });
    });
})

//mongo methods to compare password
UserSchema.methods.comparePassword = function(password){
    // Load hash from your password DB.
    //use Sync so that we wait the system to check the password with the database
    //return true means correct password
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', UserSchema)

module.exports = User