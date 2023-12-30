let email = document.getElementById("email")
let password = document.getElementById("password")

console.log(firebase.auth)

async function createAccount(){
console.log(email.value)
console.log(password.value)

 await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
.then((data) => {
  // Signed up 
//   const user = userCredential.user;
console.log(data)
  // ...
})
.catch((e) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
console.log(e)
  // ..
});

}