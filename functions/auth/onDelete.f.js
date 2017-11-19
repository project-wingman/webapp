const functions = require('firebase-functions')
const admin = require('firebase-admin')
try { admin.initializeApp(functions.config().firebase) } catch (e) {} // You do that because the admin SDK can only be initialized once.

exports = module.exports = functions.auth.user().onDelete(event => {
  const user = event.data
  const uid = user.uid

  // create the user inside firestore
  const deleteUser = admin.firestore().collection('users').doc(uid).delete()

  return Promise.all([deleteUser]).then(results => {
    console.log(results)
  })
})
