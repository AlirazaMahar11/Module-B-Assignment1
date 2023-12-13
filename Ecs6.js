const container_arr = [
  {
    id: 4,
    title: "NewTitle",
    price: 205,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image_url: "Images/ShirtImage.jpeg"
  },
  {
    id: 7,
    title: "Ergonomic Wooden <br> Tuna",
    price: 743,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image_url: "Images/Trouser Image.jpeg"
  },
  {
    id: 9,
    title: "Electronic Bronze Chips",
    price: 808,
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image_url: "Images/Cap Image.jpeg"
  },
  {
    id: 11,
    title: "Awesome Bronze Car",
    price: 382,
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image_url: "Images/Cap 1 Images.jpeg"
  },
  {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image_url: "Images/Cap 2 Image.jpeg"
  }
];

const card_Container = document.getElementById("Card-Container")

container_arr.forEach(element => {
    const card_div = document.createElement("div")
    let cards_Info = (`<img src="${element.image_url}">
    <h3 class="Title">Title : ${element.title}</h3><h3>Id : ${element.id}</h3><h3>Price : ${element.price}</h3><hr><h3>${element.description}</h3>`)
    card_div.innerHTML += cards_Info
    card_Container.appendChild(card_div)
});