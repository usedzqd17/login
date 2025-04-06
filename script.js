document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simuler une vérification basique (en pratique, il faudrait un backend pour cela)
    if (email === "test@example.com" && password === "password123") {
      localStorage.setItem('user', JSON.stringify({ email: email }));
      alert("Connexion réussie");
      window.location.href = "page_protegee.html"; // Redirection après connexion réussie
    } else {
      alert("Email ou mot de passe incorrect");
    }
  });
  
  // Vérifier si l'utilisateur est connecté
  if (localStorage.getItem('user')) {
    window.location.href = "page_protegee.html"; // Rediriger vers la page protégée si l'utilisateur est connecté
  }
  