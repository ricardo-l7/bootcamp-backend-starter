const User = require('../../models/User')

const getAllUsers = async () => {
    try {
        const users = await User.query()
        return users
    } catch (err) {
        console.log(err)
        throw new Error('Failed to get users')
    }
    
}

const getUserById = async (obj, {id}, context) => {
    try {
        const user = await User.query().findOne('id', id)
        return user
    } catch (err) {
        console.log(err)
        throw new Error('Failed to get User with that id')
    }
    
}


const resolver = {
    Query: {
        getAllUsers,
        getUserById
    }
}

module.exports = resolver;