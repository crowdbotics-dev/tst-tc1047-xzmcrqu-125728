import axios from "axios"
import {
  TST_TC1047ZHVZAKZEAD_PASSWORD,
  TST_TC1047ZHVZAKZEAD_USERNAME
} from "react-native-dotenv"
const tSTTCzhvzakzead = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047ZHVZAKZEAD_PASSWORD,
    password: TST_TC1047ZHVZAKZEAD_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
