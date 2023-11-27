import User from "../models/usersModels.js";
// 1 - add user
export const createUser = async (req, res) => {
  const { balance_usd, balance_usdt, email, username, password, status, role } = req.body;

  try {
    const newUser = await User.create({
      balance_usd,
      balance_usdt,
      email,
      username,
      password,
      status,
      role,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// 2 - get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// 3 - get single user
export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

  
// 4 - delete user
export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await User.destroy({ where: { userId: userId } });
    if (result === 0) {
      return res.status(404).json({ message: "User not deleted" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
  
};

//5-update user
export const updateUser = async (req,res,next) =>{
    const { userId } = req.params;
    try{
        if(req.body){
            const user=await User.update({...req.body},{where:{userId:userId}});
            return res.status(200).json({message:`user updated successfully!`,user:user});
        }
        res.status(400).json({message:'something went wrong'})

    }catch(err){console.error(err);
    }

}