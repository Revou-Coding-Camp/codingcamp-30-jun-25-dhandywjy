console.log("Ini dari card");

document.addEventListener("DOMContentLoaded", function () {
     const projects = [
    {
        title : "Landing Page",
        description : "Navbar - Category - Best Selling",
        image : "assets/e-commerce/1.png"
    },
    {
        title : "Product Catalog",
        description : "Explore Product",
        image : "assets/e-commerce/2.png"
    },
    {
        title : "Product Catalog",
        description : "Explore Product",
        image : "assets/e-commerce/3.png"
    },
    {
        title : "Category Button & Footer",
        description : "View Category & Footer",
        image : "assets/e-commerce/5.png"
    },
    {
        title : "Detail Page",
        description : "Detail Product",
        image : "assets/e-commerce/detail2.png"
    },
    {
        title : "Cart Page",
        description : "Checkout Via WhatsApp",
        image : "assets/e-commerce/cart1.png"
    },
    {
        title : "Checkout Messages",
        description : "automated messages",
        image : "assets/e-commerce/wa.png"
    }
  ];

  const cardContainer = document.getElementById("projectCards");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card-projects";

    card.innerHTML = `
      <div class="logo-projects-container">
        <img src="${project.image}" alt="${project.title}" class="logo-projects">
      </div>
      <h3 class="heading-projects">${project.title}</h3>
      <p class="paragraph-projects">${project.description}</p>
      <a href="${project.image}" target="_blank" class="btn-demo">View Project</a>
    `;

    cardContainer.appendChild(card);
  });
});

