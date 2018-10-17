var express = require('express');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var multer = require('multer');

var router = express.Router();



module.exports = router;
