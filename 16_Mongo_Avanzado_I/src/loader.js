import { userList } from "./Users.js";
import { userModel } from "./models/user.model.js";

const Loader = async () => {
  try {
    userModel.insertMany(userList, (error, docs) => {
      if (error) {
        console.log("Error al insertar datos, puede que ya existan");
      } else {
        console.log("Datos insertados");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default Loader;
