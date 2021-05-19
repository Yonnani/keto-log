console.log('test');

document.getElementById('login-form').addEventListener('submit', e => {
    console.log('login clicked', e);
    e.preventDefault();
    // firebase.auth().signInWithEmailAndPassword()
});