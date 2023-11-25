import Users from "../models/usersModels.js";
// 1 - add user
export const addUser = async (req, res) => {
  const {
    userId,
    userName,
    email,
    password,
    userRole,
    balance_usd,
    balance_usdt,
  } = req.body;

  try {
    const user = await Users.create({
      userId,
      userName,
      email,
      password,
      userRole,
      balance_usd,
      balance_usdt,
    });

    res.status(200).json({ user, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// 2 - get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// 3 - get single user
export const getUserById = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const user = await Users.findOne({ where: { userId: userId } });
      console.log('UserID:', userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  };

  
// 4 - delete user
export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await Users.destroy({ where: { userId: userId } });
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
            const user=await Users.update({...req.body},{where:{userId:userId}});
            return res.status(200).json({message:`user updated successfully!`,user:user});
        }
        res.status(400).json({message:'something went wrong'})

    }catch(err){console.error(err);
    }

}