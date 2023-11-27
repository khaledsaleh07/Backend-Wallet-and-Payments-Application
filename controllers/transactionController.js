import Transaction from "../models/transactionsModels.js";

// Create main model
const Id = Transaction.id; // Access the 'id' property of the 'Promotions' model
const Sender_id = Transaction.sender_id;
const Receiver_id = Transaction.receiver_id;
const Date = Transaction.date;
const AmountType = Transaction.amountType;
const Amount = Transaction.amount;
const Promotion_id = Transaction.promotion_id;

// Main work
// 1- Create transaction
export async function addTransaction(req, res) {
  try {
    const info = {
      sender_id: req.body.sender_id,
      receiver_id: req.body.receiver_id,
      date: req.body.date,
      amountType: req.body.amountType,
      amount: req.body.amount,
      promotion_id: req.body.promotion_id,
    };

    const addedTransaction = await Transaction.create(info);
    res.status(200).send(addedTransaction);
  } catch (error) {
    console.error('Error creating transaction:', error.message);
    res.status(500).send('Internal Server Error');
  }
}
// 2- Get all transaction
export async function getAllTransaction (req, res) {
  const getAllTransaction = await Transaction.findAll();
  res.status(200).send(getAllTransaction);
};

// 3- Get single transaction
export async function getOneTransaction(req, res) {
  const id = parseInt(req.params.id); 
  const getOneTransaction = await Transaction.findOne({ where: { id } });
  res.status(200).send(getOneTransaction);
};

// 4- Update single transaction
export async function updateTransaction (req, res)  {
  const id = parseInt(req.params.id); 
  const updatedTransaction = await Transaction.update(req.body, { where: { id } });
  res.status(200).send(updatedTransaction);
};

// 5- Delete transaction by ID


export const deleteTransaction = async (req, res) => {
  const {TransactionId } = req.params;

  try {
    const result = await Transaction.destroy({ where: { id: TransactionId } });
    if (result === 0) {
      return res.status(404).json({ message: "Transaction not deleted" });
    }

    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!", error: error.message });
  }
};


