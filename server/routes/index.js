const router = require('express').Router()
const  {
    regsiter,
    login,
    updateUser,
    updatePassword,
    updateUserInterest,
    getFollowerDetails
} = require('../controllers/user')

router.route('/register').post(regsiter)
router.route('/login').post(login)
router.route('/updateUser').patch(updateUser)
router.route('/updatePassword').put(updatePassword)
router.route('/updateUserInterest').put(updateUserInterest)
router.route('/getFollowerDetails').get(getFollowerDetails)

module.exports = router