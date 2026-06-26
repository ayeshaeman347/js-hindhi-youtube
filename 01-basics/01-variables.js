//vraiable are contatiner to store data i the memory there ar three types of varaibales 
//const for constsnt data that is not going to be change in  future
//var is older method doesnot folow block scope is globala and can declare many times 
// let is safer method for those data which have chance to may they change in future
// can be used without any keyword but is globala and can used outside any function which is too risky
let accountId="ayesha@gmail.com"
const accountPass="ayesha"
console.log(accountId)
accountId="ahsan@gmail.com"
var name="ahsan"
var name="ayesha"
name="saya"
age=13
console.table([accountId,accountPass,name,age])
age=45
console.log(accountId)
console.table([accountId,accountPass,name])