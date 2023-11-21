const db = require("../models");
const { Promotions } = db; // Access the 'Promotions' model using the 'sequelize' instance

// Create main model
const Id = db.Promotions.id; // Access the 'id' property of the 'Promotions' model
const User_id = db.Promotions.user_id;
const Promotion_description = db.Promotions.promotion_description;
const Start_date = db.Promotions.start_date;
const End_date = db.Promotions.end_date;
const Promotion_amount = db.Promotions.promotion_amount;
const Promo_code = db.Promotions.promo_code;

// Main work
// 1- Create promotion
const addPromotions = async (req, res) => {
  const info = {
    id: req.body.id,
    user_id: req.body.user_id,
    promotion_description: req.body.promotion_description,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    promotion_amount: req.body.promotion_amount,
    promo_code: req.body.promo_code,
  };

  const promotions = await Promotions.create(info);
  res.status(200).send(promotions);
};

// 2- Get all promotions
const getAllPromotions = async (req, res) => {
  const promotions = await Promotions.findAll();
  res.status(200).send(promotions);
};

// 3- Get single promotion
const getOnePromotions = async (req, res) => {
  const id = parseInt(req.params.id); // Ensure the ID is parsed as an integer
  const promotion = await Promotions.findOne({ where: { id } });
  res.status(200).send(promotion);
};

// 4- Update single promotion
const updatePromotions = async (req, res) => {
  const id = parseInt(req.params.id); // Ensure the ID is parsed as an integer
  const updatedPromotion = await Promotions.update(req.body, { where: { id } });
  res.status(200).send(updatedPromotion);
};

// 5- Delete promotion by ID
const deletePromotions = async (req, res) => {
  const id = parseInt(req.params.id); // Ensure the ID is parsed as an integer
  await Promotions.destroy({ where: { id } });
  res.status(200).send("Promotion has been deleted");
};

// 6- Get published promotions
const getPublishedPromotions = async (req, res) => {
  const publishedPromotions = await Promotions.findAll({ where: { published: true } });
  res.status(200).send(publishedPromotions);
};

module.exports = {
  addPromotions,
  getAllPromotions,
  getOnePromotions,
  updatePromotions,
  deletePromotions,
  getPublishedPromotions,
};
