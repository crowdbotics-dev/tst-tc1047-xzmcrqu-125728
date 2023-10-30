import axios from "axios"
import {
  TST_TC1047BGZNDTNPXP_PASSWORD,
  TST_TC1047BGZNDTNPXP_USERNAME
} from "react-native-dotenv"
const tSTTCbgzndtnpxp = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047BGZNDTNPXP_PASSWORD,
    password: TST_TC1047BGZNDTNPXP_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
