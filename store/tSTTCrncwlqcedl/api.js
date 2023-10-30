import axios from "axios"
import {
  TST_TC1047RNCWLQCEDL_PASSWORD,
  TST_TC1047RNCWLQCEDL_USERNAME
} from "react-native-dotenv"
const tSTTCrncwlqcedl = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047RNCWLQCEDL_PASSWORD,
    password: TST_TC1047RNCWLQCEDL_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
