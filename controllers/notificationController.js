import Notification from "../models/notificationModels.js";

export async function getAllNotifications(req, res) {
  try {
    let getdata = await Notification.findAll();
    if (getdata) {
      res.json({
        success: true,
        message: "Data Fetch Successfully",
        data: getdata,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: `Something went wrong, ${err.message}`,
      data: null,
    });
  }
}

// 1-Create notification
export const createNotification = async (req, res) => {
  const { status, receiver_id, transaction_id } = req.body; 
  const newNotification = {
    status,
    receiver_id,
    transaction_id,
  };

  try {
    const createdNotification = await Notification.create(newNotification);
    res.status(200).send(createdNotification);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Failed to create notification" });
  }
};


// 3-Get single notification
export const getOneNotification = async (req, res) => {
  const id = parseInt(req.params.id);
  const notification = await Notification.findOne({ where: { id } });
  res.status(200).send(notification);
};

// 4-Update single notification
export const updateNotification = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedNotificationData = req.body;
  const updatedNotification = await Notification.update(
    updatedNotificationData,
    { where: { id } }
  );
  res.status(200).send(updatedNotification);
};

// 5-Delete notification by ID
export const deleteNotification = async (req, res) => {
  const id = parseInt(req.params.id);
  await Notification.destroy({ where: { id } });
  res.status(200).send("Notification has been deleted");
};
