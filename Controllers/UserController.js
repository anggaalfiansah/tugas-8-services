const DataUser = require("../Models/UserModel");

// Add User
exports.addUser = (req, res) => {
  let { username, email, phone, address } = req.body;
  let addUser = new DataUser({
    username: username,
    email: email,
    phone: phone,
    address: address,
  });

  if(username !== null && email !== null && phone !== null && address !== null){
  addUser
    .save()
    .then((data) => {
      res.status(200).json({
        message: "User berhasil ditambahkan",
        timestamp: req.requestTime,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send("Gagal " + err);
    });
  }
};

// Get All User
exports.getAllUser = (req, res) => {
  DataUser.find().exec((err, data) => {
    res.status(200).json({
      message: "Data Berhasil Didapatkan",
      timestamp: req.requestTime,
      jumlahData: data.length,
      data: data,
    });
  });
};

// Get User By Username
exports.getUserByUsername = (req, res) => {
  let username = req.params.username;
  DataUser.find({ username: { $regex: username, $options: "i" } }).exec(
    (err, data) => {
      res.status(200).json({
        message: "Data Berhasil Didapatkan",
        timestamp: req.requestTime,
        jumlahData: data.length,
        data: data,
      });
    }
  );
};

// Get User By Email
exports.getUserByEmail = (req, res) => {
  let email = req.params.email;
  DataUser.find({ email: { $regex: email, $options: "i" } }).exec(
    (err, data) => {
      res.status(200).json({
        message: "Data Berhasil Didapatkan",
        timestamp: req.requestTime,
        jumlahData: data.length,
        data: data,
      });
    }
  );
};

// Get User By Phone
exports.getUserByPhone = (req, res) => {
  let phone = req.params.phone;
  DataUser.find({ phone: { $regex: phone, $options: "i" } }).exec(
    (err, data) => {
      res.status(200).json({
        message: "Data Berhasil Didapatkan",
        timestamp: req.requestTime,
        jumlahData: data.length,
        data: data,
      });
    }
  );
};

// Get User By Address
exports.getUserByAddress = (req, res) => {
  let address = req.params.address;
  DataUser.find({ address: { $regex: address, $options: "i" } }).exec(
    (err, data) => {
      res.status(200).json({
        message: "Data Berhasil Didapatkan",
        timestamp: req.requestTime,
        jumlahData: data.length,
        data: data,
      });
    }
  );
};

// Update User By Id
exports.updateUserById = (req, res) => {
  let { username, email, phone, address } = req.body;
  
  let dataUpdate = {
    username: username,
    email: email,
    phone: phone,
    address: address,
  };
  let id = req.params.id;

  DataUser.findByIdAndUpdate(id, dataUpdate, (err, data) => {
    if (err || data === null) {
      res.status(400).json({
        message: "Gagal Update Data",
        timestamp: req.requestTime,
      });
    } else {
      res.status(200).json({
        message: `User dengan id = ${id} Berhasil diupdate`,
        timestamp: req.requestTime,
        beforeUpate: data,
        afterUpdate: dataUpdate,
      });
    }
  });
};

// Delete User By Id
exports.deleteUserById = (req, res) => {
  let id = req.params.id;
  DataUser.findByIdAndDelete(id, (err, data) => {
    if (err || data === null) {
      res.status(400).json({
        message: "Gagal Update Data",
        timestamp: req.requestTime,
      });
    } else {
      res.status(200).json({
        message: `User dengan id = ${id} Berhasil diupdate`,
        timestamp: req.requestTime,
        beforeUpate: data,
        afterUpdate: dataUpdate,
      });
    }
  });
}
