const objets = document.querySelector("ul");
const button = document.querySelector("button");
const deleteObjets = document.getElementById("complete-btn")


button.addEventListener("click", (e) => {

  e.preventDefault()

    const newItem = document.createElement("li");
    newItem.classList.add("li-of-list");
    newItem.textContent = "Mesa ";

    // Adicionar o item à lista
    objets.appendChild(newItem);
});
