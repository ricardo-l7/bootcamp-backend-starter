const User = require('../../models/User')
const { UserInputError } = require('apollo-server-express')
const {
  hashPassword, comparePassword, createToken,
} = require('../../lib/auth')

const removeUser = async (obj, {input: {email, password}}, context) => {
    const user = await User.query().findOne({
        email,
      })
    if (!user) {
        throw new UserInputError('Invalid email or password, cannot delete user')
    }
    
    const validPassword = await comparePassword(password, user.password)
    if (!validPassword) {
        throw new UserInputError('Invalid email or password, cannot delete user')
    }

    const deleteUser = await Author.query().delete().where('email', email)
    return deleteUser;
}

const editUser = async (obj, {input: {email, password, username, location }}, context) => {
    try {
        const edit = await User.query().patch({
            password: password,
            location: location,
            username: username
        }).where('email', email);
        return edit;
    }
    catch (err) {
        console.log(err)
        throw new Error('Failed to edit information')
    } 
}

const resolver = {
    Mutation: {
        removeUser,
        editUser
    }
}

module.exports = resolver;