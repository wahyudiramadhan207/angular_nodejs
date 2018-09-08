const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'project',
	//multipleStatements: true
});

//CONNECTION_DB
mysqlConnection.connect((err) => {
	if(!err)
		console.log('DB SUKSES');
	else
		console.log('DB GAGAL');
});
app.listen(3000, ()=>console.log('Port EXPRESS: 3000 SUKSES'));

//GET SEMUA
app.get('/mahasiswa', (req, res)=>{
	mysqlConnection.query('select * from mahasiswa', (err, rows, fields)=>{
		if(!err)
			res.send(rows);
		else
			console.log(err);
	})
});

//GET SATU
app.get('/mahasiswa/:id', (req, res)=>{
	mysqlConnection.query('select * from mahasiswa where id = ?',[req.params.id], (err, rows, fields)=>{
		if(!err)
			res.send(rows);
		else
			console.log(err);
	})
});

//DELETE
app.delete('/mahasiswa/:id', (req, res)=>{
	mysqlConnection.query('delete from mahasiswa where id = ?',[req.params.id], (err, rows, fields)=>{
		if(!err)
			res.send('Delete Sukses');
		else
			console.log(err);
	})
});

//INSERT
app.post('/mahasiswa', (req, res)=>{
	mysqlConnection.query('insert into mahasiswa set npm = ?, nama = ?', [req.body.npm, req.body.nama],function (err, rows, fields) {
		if(!err)
			res.send('Insert Sukses');
		else
			console.log(err);
		})
});

//UPDATE
app.put('/mahasiswa/:id', function (req, res){
	mysqlConnection.query('update mahasiswa set npm = ?, nama = ?  WHERE id= ?', [req.body.npm, req.body.nama, req.params.id], function (err, rows, fields){
		if(!err)
			res.send('Update Sukses');
		else
			console.log(err);
		})
})