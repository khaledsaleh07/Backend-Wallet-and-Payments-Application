import User from "../models/usersModels.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
// 1 - add user
export const createUser = async (req, res) => {
  const { balance_usd, balance_usdt, email, username, password, status, role } = req.body;

  try {
    const newUser = await User.create({
      balance_usd,
      balance_usdt,
      email,
      username,
      password : await bcrypt.hash(password,15),
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
  const { id } = req.params;

  try {
    const user = await User.findOne({ where: { id: id } });
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
    const result = await User.destroy({ where: { id: userId } });
    if (result === 0) {
      return res.status(404).json({ message: "User not deleted" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!", error: error.message });
  }
};


//5-update user
export const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    if (req.body) {
      const [updatedRowsCount, updatedRows] = await User.update(
        { ...req.body },
        { where: { id: userId } }
      );

      if (updatedRowsCount > 0 && updatedRows && updatedRows.length > 0) {
        return res
          .status(200)
          .json({ message: 'User updated successfully!', user: updatedRows[0] });
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    }

    res.status(400).json({ message: 'Something went wrong' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


//6- get all admin 
export const getAllAdmins = async (req, res) => {
  try {
    const admins = await User.findAll({ where: { role: 'admin' } });
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
 };

 //7- get admin by id 

 export const getAdminById = async (req, res) => {
  const { id } = req.params;
 
  try {
   const admin = await User.findOne({ where: { id: id, role: 'admin' } });
   if (admin) {
     res.json(admin);
   } else {
     res.status(404).json({ error: 'Admin not found' });
   }
  } catch (error) {
   console.error(error);
   res.status(500).json({ error: 'Internal Server Error' });
  }
 };

 // 8- get all users  role user 
 
 export const getJustUsers = async (req, res) => {
  try {
   const justusers = await User.findAll({ where: { role: 'user' } });
   res.json(justusers);
  } catch (error) {
   console.error(error);
   res.status(500).json({ error: 'Internal Server Error' });
  }
 };



// get just user by id 
export const getJustUsersbyId = async(req, res) => {
  const { id } = req.params;
  try {
    const justuserbyId = await User.findOne({where: {id :id , role: 'user'}})
    if (justuserbyId) {
      res.json(justuserbyId);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'});
  }
 }
 

// get alll merchant 

export const getAllMerchants = async (req, res) => {
  try {
   const merchants = await User.findAll({ where: { role: 'merchant' } });
   res.json(merchants);
  } catch (error) {
   console.error(error);
   res.status(500).json({ error: 'Internal Server Error' });
  }
 };



 //  get merchant by id
export const getMerchantById = async (req, res) => {
  const { id } = req.params;
 
  try {
    const merchant = await User.findOne({ where: { id: id, role: 'merchant' } });
    if (merchant) {
      res.json(merchant);
    } else {
      res.status(404).json({ error: 'Merchant not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
 };
 


// ----------------<><><><><></></></></>----------

//register user
// export async function register(req, res) {
//   try{
//       let { username, password } = req.body;

//       let getdata = await AdminModel.create({
//           username,
//           password: await bcrypt.hash(password, 15)
//       });

//       if(getdata){
//           res.json({
//               success: true,
//               message:"Data Fetch Successfully",
//               data:getdata
//           });
//       }
//   }catch(err){
//       res.status(500).json({
//           success: false,
//           message:`Something went wrong, ${err.message}`,
//           data: null
//       })
//   }
// }
//sign in user 
export async function signInUser (req, res) {
  try {
      const { username, password } = req.body;
      const user = await User.findOne({
          where: {username}
      });
      // Verify password
      const passwordValid = await bcrypt.compare(password, user.password);
      if (!passwordValid || !user) {
          return res.status(404).json('Incorrect email and password combination');
      }


      // Authenticate user with jwt
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
 
      res.status(200).send({
          id: user.id,
          email: user.username,
          accessToken: token,
      });
  } catch (err) {
      return res.status(500).send('Sign in error');
  }
}


        

