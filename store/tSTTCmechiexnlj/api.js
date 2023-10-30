import axios from "axios"
import {
  TST_TC1047MECHIEXNLJ_PASSWORD,
  TST_TC1047MECHIEXNLJ_USERNAME
} from "react-native-dotenv"
const tSTTCmechiexnlj = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047MECHIEXNLJ_PASSWORD,
    password: TST_TC1047MECHIEXNLJ_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
