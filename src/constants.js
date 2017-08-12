const REG_USER_NAME=/^[A-Za-z0-9]{5,}$/
const RGE_PASSWORD=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,}/
const USER_NAME_RULE="The username field accepts alpha-numeric values only and The username length is no less than 5 characters!"
const PASSWORD_RULE="The password has a minimum length of 8 characters and contains at least 1 number, 1 uppercase, and 1 lowercase character!"
const PASS_RULE="pass!"
const COLOR_RED="red"	
const COLOR_GREEN="green"	
const URL="http://localhost:8080"	
const API_CREAT_USER="/createUser"
module.exports={
		REG_USER_NAME:REG_USER_NAME,
		RGE_PASSWORD:RGE_PASSWORD,
		USER_NAME_RULE:USER_NAME_RULE,
		PASSWORD_RULE:PASSWORD_RULE,
		PASS_RULE:PASS_RULE,
		COLOR_RED:COLOR_RED,
		COLOR_GREEN:COLOR_GREEN,
		URL:URL,
		API_CREAT_USER:API_CREAT_USER
}