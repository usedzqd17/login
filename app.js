document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page à la soumission du formulaire
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Chargeons les données des utilisateurs depuis le fichier JSON
    fetch('users.json')
      .then(response => response.json())
      .then(data => {
        const users = data.users;
        
        // Cherche un utilisateur avec le même nom d'utilisateur et mot de passe
        const user = users.find(user => user.username === username && user.password === password);
  
        if (user) {
          // Si les informations sont correctes
          
          // Redirection vers une autre page (par exemple bacfr)
          window.location.href = 'https://usedzqd17.github.io/bacfr/';
        } else {
          // Si les informations sont incorrectes
          document.getElementById('error-message').style.display = 'block';
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
      });
  });

const users = [
    { username: "user", password: "pass" },
    { username: "user2", password: "password2" }
];

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'https://usedzqd17.github.io/bacfr/';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
  
