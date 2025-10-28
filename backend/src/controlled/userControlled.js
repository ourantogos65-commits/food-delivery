import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;
    console.log("BODY!!!!!!", body);

    const hashedPass = await bcrypt.hashSync(password, 10);
    console.log("old pass", password);
    console.log("new pass", hashedPass);

    const user = await User.create({
      email,
      password: hashedPass,
    });
    res.status(200).send({ message: "succes", data: user });
  } catch (error) {
    console.log("error", error);
  }
};
export const login = async (req, res) => {
  const { body } = req;
  const { email, password } = body;

  const user = await User.findOne({ email });

  console.log("User", user);
  // if (!user.length) {

  // }
  console.log("body data", email, password);
  const isPassCorrect = bcrypt.compareSync(password, user.password);
  if (!isPassCorrect) {
    return res.status(403).send({ message: "Pass incorrect" });
  }

  res.status(200).send({ message: "Success", data: user });
};

// export const getUsers = async (req, res) => {

//   try {
//     const result = await User.find();
//     res.send(result)
//   } catch (error) {
//     res.send(error);
//   }
// };

// export const CreateUser = async (req, res) => {
//   const {body} = req
//   console.log(body)
//   try {
//     const result = await User.create(body);
//     res.send (result)
//   } catch (error) {
//     res.send(error);
//   }
// };
// export const UpdateById=async (req,res)=>{
// const {id}=req.params
// try {
//  const result= await User.findUpdate(id)
//  res.send(result)
// } catch (error) {
//   res.send(error)
// }
// }

// export const deleteUserById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await User.findByIdAndDelete(id);
//     res.send(result)
//   } catch (error) {
//     res.send(error);
//   }
// };
