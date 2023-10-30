import axios from "axios"
import {
  TST_TC1047SLXSJAIWWS_USERNAME,
  TST_TC1047SLXSJAIWWS_PASSWORD
} from "react-native-dotenv"
const tSTTCslxsjaiwws = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047SLXSJAIWWS_USERNAME,
    password: TST_TC1047SLXSJAIWWS_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
