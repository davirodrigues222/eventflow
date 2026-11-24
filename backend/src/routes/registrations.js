const router = require('express').Router();
const auth = require('../middleware/auth');
const {
  register,
  cancelRegistration,
  getMyRegistrations,
} = require('../controllers/registrationController');

router.post('/', auth, register);
router.delete('/:id', auth, cancelRegistration);
router.get('/me', auth, getMyRegistrations);

module.exports = router;
