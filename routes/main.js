const express =  require ('express')
const router = express.Router();

const authenticationMiddleware = require('../middleware/auth')
const {login, dashboard} = require('../controllers/jwt')
const {getCryptoRates} = require('../controllers/integrations');
const {getDateTime} = require('../controllers/today-date');
const {sortedArray} = require('../controllers/sorted-array');

router.route('/dashboard').get(authenticationMiddleware, dashboard);
router.route('/login').post(login);

router.get('/crypto', getCryptoRates);
router.get('/date', getDateTime);
router.post('/sort', sortedArray);

module.exports = router;