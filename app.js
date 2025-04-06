// Initialisation d'Auth0
const auth0Client = await createAuth0Client({
    domain: "dev-oq5dze4x3q2c2m4h.us.auth0.com", // Remplace par ton domaine Auth0
    client_id: "WncrlkAlfiVpflLlWq06izv9gaqI9GVI",     // Remplace par ton client ID
    redirect_uri: "https://usedzqd17.github.io/bacfr/#"
  });
  
  // Fonction pour afficher le statut de l'utilisateur
  async function updateUI() {
    const isAuthenticated = await auth0Client.isAuthenticated();
    if (isAuthenticated) {
      const user = await auth0Client.getUser();
      document.getElementById("login").style.display = "none";
      document.getElementById("logout").style.display = "block";
      document.getElementById("error-message").innerText = `Bienvenue, ${user.name}`;
    } else {
      document.getElementById("login").style.display = "block";
      document.getElementById("logout").style.display = "none";
    }
  }
  
  // Connexion de l'utilisateur
  document.getElementById("login").addEventListener("click", async () => {
    await auth0Client.loginWithRedirect();
  });
  
  // Déconnexion de l'utilisateur
  document.getElementById("logout").addEventListener("click", async () => {
    await auth0Client.logout({
      returnTo: window.location.origin
    });
  });
  
  // Si l'utilisateur revient de la page de redirection
  window.onload = async () => {
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
      await auth0Client.handleRedirectCallback();
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    updateUI();
  };
  
