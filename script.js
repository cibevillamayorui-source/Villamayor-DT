fetch("pets.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("pet-container");

    data.pets.forEach(pet => {
      const card = document.createElement("div");
      card.classList.add("pet-card");

      card.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <div class="pet-name">${pet.name} | ${pet.age}</div>
        <div class="pet-info">${pet.gender}</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading pets:", error));