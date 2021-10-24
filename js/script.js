const loadClients = () => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => setClient(data))
      .catch((error) => {
        alert("Ocorreu um erro ao acessar a api, tente novamente mais tarde.");
        console.log(error);
      });
}

function setClient(clients) {

    for (let index = 0; index < clients.results.length; index++) {
      const client = clients.results[index];
      document.getElementById(`nomeUsuario${index}`).innerHTML = `${client.name.first} ${client.name.last}, ${client.dob.age}`;
      document.getElementById(`descUsuario${index}`).innerHTML = client.location.timezone.description;
      document.getElementById(`imgUsuario${index}`).src = client.picture.large;
  }
}