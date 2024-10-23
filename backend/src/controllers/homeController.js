const User = require('../models/user');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs').promises;
const path = require('path');

exports.categoryFunction1 = async (req, res) => {


  if (req.body.name == "") {
    res.status(400).json({ error: "please enter category name" });
  }
  else if (!req.file) {
    res.status(400).json({ error: "please upload image" });
  }
  else {
    const category = await prisma.category.create({
      data: {

        name: req.body.name,
        categoryimage: req.file.filename,
        status: "active",
        priority: "0",
      },
    });

    res.status(200).json({ success: "Data  insered" });
  }

}

exports.categoryFunction2 = async (req, res) => {

  const file = await prisma.category.findUnique({
    where: {
      id: req.body.id
    }
  });
  if (!file) {
    return res.status(404).json({ error: "Category not found" });
  }
  //pelhe image ka path dundo fine se
  //fir usko store karo kisi var mai
  const imagePath = path.join(__dirname, '../../public/uploads', file.categoryimage);

  console.log("Checking file at path:", imagePath);
  //fir un ko unlink karo  
  await fs.access(imagePath); // Check for file existence
  await fs.unlink(imagePath); // If it exists, delete it
  console.log("File deleted:", imagePath);

  //fir ye code chalaav
  const category = await prisma.category.delete({
    where: {
      id: req.body.id  // Make sure req.body.id contains the ID of the category
    }
  });
  res.status(200).json({ success: "Data  Deleted" });
};
exports.categoryFunction = async (req, res) => {
  try {
    const allCategory = await prisma.category.findMany()
    res.render('category', { cat: allCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};







exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};








exports.indexFunction = async (req, res) => {
  try {
    res.render('index');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.subcategoryFunction = async (req, res) => {
  try {
    res.render('subcategory');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.productattributeFunction = async (req, res) => {
  try {
    res.render('productattribute');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.editattributeFunction = async (req, res) => {
  try {
    res.render('editattribute');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.productlistFunction = async (req, res) => {
  try {
    res.render('productlist');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.limitedstockFunction = async (req, res) => {
  try {
    res.render('limitedstock');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.addnewproductFunction = async (req, res) => {
  try {
    res.render('addnewproduct');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.bulkimportFunction = async (req, res) => {
  try {
    res.render('bulkimport');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.bulkexportFunction = async (req, res) => {
  try {
    res.render('bulkexport');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.messageFunction = async (req, res) => {
  try {
    res.render('message');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.salesreportFunction = async (req, res) => {
  try {
    res.render('salesreport');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.orderreportFunction = async (req, res) => {
  try {
    res.render('orderreport');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.earningreportFunction = async (req, res) => {
  try {
    res.render('earningreport');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.expensereportFunction = async (req, res) => {
  try {
    res.render('expensereport');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.customersearchFunction = async (req, res) => {
  try {
    res.render('customersearch');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.keywordsearchFunction = async (req, res) => {
  try {
    res.render('keywordsearch');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginFunction = async (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};