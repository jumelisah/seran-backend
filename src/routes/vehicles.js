const vehicles = require('express').Router();

const {getVehicles, getVehicle, getCategory, addVehicle, updateVehicle, deleteVehicle} = require('../controller/vehicles');
const upload = require('../helpers/upload');

vehicles.get('/', getVehicles);
vehicles.get('/category/', getCategory);
vehicles.get('/category/:category_id', getCategory);
vehicles.get('/:id', getVehicle);
vehicles.post('/', addVehicle);
vehicles.patch('/', updateVehicle);
vehicles.patch('/:id', upload.single('image'), updateVehicle);
vehicles.delete('/', deleteVehicle);
vehicles.delete('/:id', deleteVehicle);

module.exports = vehicles;