const router = require('express').Router()
const authenticateUser = require('../middleware/authHandler')
const  {
    regsiter,
    login,
    updateUser,
    updateUserInterest,
    getFollowerDetails,
    getUser,
    changePassword,
    addFollower
} = require('../controllers/user')

router.route('/register').post(regsiter)
router.route('/login').post(login)
router.route('/getUser').get(authenticateUser ,getUser)
router.route('/updateInterest').put(authenticateUser, updateUserInterest)
router.route('/updateUser').put(authenticateUser, updateUser)
router.route('/addFollower').post(addFollower)
router.route('/changePassword').put(authenticateUser, changePassword)
router.route('/getFollowerDetails').get( getFollowerDetails)

module.exports = router