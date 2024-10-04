var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});

router.get('/paketwisata', function(req, res, next) {
  let listpaketwisata =[
    {'nama' : 'Wisata Pulau Kemaro','harga' : 500000},
    {'nama' : 'Wisata Punti Kayu','harga' : 250000},
    {'nama' : 'Wisata Jakabaring','harga' : 100000},
  ]
  res.render('paketwisata', { title: 'Paket Wisata', listpaketwisata: listpaketwisata });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'From Pemesanan Paket' });
});

router.post('/orderdetail', function(req, res, next) {
    const orderData = {
      nama: req.body.nama,
      telepon: req.body.telepon,
      email: req.body.email,
      alamat: req.body.alamat,
      paket: req.body.paket,
      jumlah: req.body.jumlah,
      tanggal: req.body.tanggal,
      durasi: req.body.durasi,
      tujuan: req.body.tujuan,
      panduan: req.body.panduan,
      permintaan: req.body.permintaan,
      transportasi: req.body.transportasi,
      akomodasi: req.body.akomodasi,
      tipekamar: req.body.tipekamar,
      pembayaran: req.body.pembayaran,
      
  };

    // Redirect ke halaman detail order dengan data order
    res.render('orderdetail', {title: 'Detail Pemesanan Paket', orderData });
  });
//   res.render('orderdetail', { title: 'Detail Pemesanan Paket' });  
// });
module.exports = router;
