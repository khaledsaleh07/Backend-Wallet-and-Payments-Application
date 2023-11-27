

import Promotion from "../models/index.js";

// Create main model
const Id = Promotion.id; // Access the 'id' property of the 'Promotions' model
const User_id = Promotion.user_id;
const Promotion_description = Promotion.promotion_description;
const Start_date = Promotion.start_date;
const End_date = Promotion.end_date;
const Promotion_amount = Promotion.promotion_amount;
const Promo_code = Promotion.promo_code;

// Main work
// 1- Create promotion
export async function addPromotions (req, res)  {
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
export async function getAllPromotions (req, res) {
  const promotions = await Promotion.findAll();
  res.status(200).send(promotions);
};

// 3- Get single promotion
export async function getOnePromotions(req, res) {
  const id = parseInt(req.params.id); // Ensure the ID is parsed as an integer
  const promotion = await Promotion.findOne({ where: { id } });
  res.status(200).send(promotion);
};

// 4- Update single promotion
export async function updatePromotions  (req, res)  {
  const id = parseInt(req.params.id); // Ensure the ID is parsed as an integer
  const updatedPromotion = await Promotion.update(req.body, { where: { id } });
  res.status(200).send(updatedPromotion);
};

// 5- Delete promotion by ID
export async function deletePromotions  (req, res) {
  const id = parseInt(req.params.id); // Ensure the ID is parsed as an integer
  await Promotion.destroy({ where: { id } });
  res.status(200).send("Promotion has been deleted");
};

// 6- Get published promotions
export async function getPublishedPromotions  (req, res) {
  const publishedPromotions = await Promotion.findAll({ where: { published: true } });
  res.status(200).send(publishedPromotions);
};


