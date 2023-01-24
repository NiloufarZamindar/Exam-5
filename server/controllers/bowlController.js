const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/user");
const Bowl = require("../models/bowl");
const getBowls = async (req, res, next) => {
  const bowls = await Bowl.findAll();
  res.json(bowls);
};
const getBowlById = async (req, res, next) => {
    const id = parseInt(req.body.id);
    const bowl = await Bowl.findOne({where:{id}});
    console.log(bowl)
    res.json(bowl);
};
const resetBowlsStock = async (req,res,next)=>{
  try{
    await Bowl.update(
      { stock: 11 },
      { where: { id: 1 } }
    );
    await Bowl.update(
      { stock: 8 },
      { where: { id: 2 } }
    );
    await Bowl.update(
      { stock: 6 },
      { where: { id: 3 } }
    );
  }catch(err){
    next(err);
  }
}
module.exports = {
  getBowls,
  getBowlById,
  resetBowlsStock
};
