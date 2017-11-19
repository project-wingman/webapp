const functions = require('firebase-functions')
const admin = require('firebase-admin')
try { admin.initializeApp(functions.config().firebase) } catch (e) {} // You do that because the admin SDK can only be initialized once.

exports = module.exports = functions.auth.user().onCreate(event => {
  const user = event.data // The Firebase user.
  const email = user.email // The email of the user.
  const displayName = user.displayName // The display name of the user.

  // create the user inside firestore
  const createUser = admin.firestore().collection('users').doc(user.uid).set({
    name: displayName,
    email: email
  })

  return Promise.all([createUser]).then(results => {
    console.log(results)
  })
})
