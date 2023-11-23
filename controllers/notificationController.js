const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('notification', {
    Id:db.Notification.id,
    status: db.Notification.status,
    received_id: db.Notification.received_id,
    transaction_id: db.Notification.transaction_id
  });

  // 1-Create notification
  const createNotification = async (req, res) => {
    const { status, received_id, transaction_id } = req.body;
    const newNotification = {
      status,
      received_id,
      transaction_id
    };

    const createdNotification = await Notification.create(newNotification);
    res.status(200).send(createdNotification);
  };

  // 2-Get all notifications
  const getAllNotifications = async (req, res) => {
    const notifications = await Notification.findAll();
    res.status(200).send(notifications);
  };

  // 3-Get single notification
  const getOneNotification = async (req, res) => {
    const id = parseInt(req.params.id);
    const notification = await Notification.findOne({ where: { id } });
    res.status(200).send(notification);
  };

  // 4-Update single notification
  const updateNotification = async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedNotificationData = req.body;
    const updatedNotification = await Notification.update(updatedNotificationData, { where: { id } });
    res.status(200).send(updatedNotification);
  };

  // 5-Delete notification by ID
  const deleteNotification = async (req, res) => {
    const id = parseInt(req.params.id);
    await Notification.destroy({ where: { id } });
    res.status(200).send("Notification has been deleted");
  };

  return {
    createNotification,
    getAllNotifications,
    getOneNotification,
    updateNotification,
    deleteNotification
  };
};
