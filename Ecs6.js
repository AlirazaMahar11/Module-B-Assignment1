// Forloop Destructuring 
// const arr_Container = [
//   Obj1={
//     id: 4,
//     title: "NewTitle",
//     price: 205,
//     description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
//     image_url: "Images/ShirtImage.jpeg"
//   },
//   Obj2={
//     id: 7,
//     title: "Ergonomic Wooden <br> Tuna",
//     price: 743,
//     description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
//     image_url: "Images/Trouser Image.jpeg"
//   },
//   Obj3={
//     id: 9,
//     title: "Electronic Bronze Chips",
//     price: 808,
//     description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
//     image_url: "Images/Cap Image.jpeg"
//   },
//   Obj4={
//     id: 11,
//     title: "Awesome Bronze Car",
//     price: 382,
//     description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
//     image_url: "Images/Cap 1 Images.jpeg"
//   },
//   Obj5={
//     id: 12,
//     title: "Recycled Rubber Cheese",
//     price: 30,
//     description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
//     image_url: "Images/Cap 2 Image.jpeg"
//   }
// ];

// const conatiner_Card = document.getElementById("Card-Container")


// for(let i=0;i < 1;i++){
//     const arr_Card = document.createElement("div")
//     let cards_Info = (`<img src="${Obj1.image_url}">
//     <h3 class="Title">Title : ${Obj1.title}</h3><h3>Id : ${Obj1.id}</h3><h3>Price :
//     ${Obj1.price}</h3><hr><h3>${Obj1.description}</h3>`)
//     // Card Two structure
//     let cards_Info1 = (`<img src="${Obj2.image_url}">
//     <h3 class="Title">Title : ${Obj2.title}</h3><h3>Id : ${Obj2.id}</h3><h3>Price :
//     ${Obj2.price}</h3><hr><h3>${Obj2.description}</h3>`)
//     // Card Three structure
//     let cards_Info2 = (`<img src="${Obj3.image_url}">
//     <h3 class="Title">Title : ${Obj3.title}</h3><h3>Id : ${Obj3.id}</h3><h3>Price :
//     ${Obj3.price}</h3><hr><h3>${Obj3.description}</h3>`)
//     // Card Four structure
//     let cards_Info3 = (`<img src="${Obj4.image_url}">
//     <h3 class="Title">Title : ${Obj4.title}</h3><h3>Id : ${Obj4.id}</h3><h3>Price :
//     ${Obj4.price}</h3><hr><h3>${Obj4.description}</h3>`)
//     // Card Five structure
//     let cards_Info4 = (`<img src="${Obj5.image_url}">
//     <h3 class="Title">Title : ${Obj5.title}</h3><h3>Id : ${Obj5.id}</h3><h3>Price :
//     ${Obj5.price}</h3><hr><h3>${Obj5.description}</h3>`)
//     arr_Card.innerHTML += cards_Info
//     arr_Card.innerHTML += cards_Info1
//     arr_Card.innerHTML += cards_Info2
//     arr_Card.innerHTML += cards_Info3
//     arr_Card.innerHTML += cards_Info4
//     conatiner_Card.appendChild(arr_Card)
// } 
// For each  loop Destructuring 

// const container_arr = [
//   {
//     id: 4,
//     title: "NewTitle",
//     price: 205,
//     description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
//     image_url: "Images/ShirtImage.jpeg"
//   },
//   {
//     id: 7,
//     title: "Ergonomic Wooden <br> Tuna",
//     price: 743,
//     description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
//     image_url: "Images/Trouser Image.jpeg"
//   },
//   {
//     id: 9,
//     title: "Electronic Bronze Chips",
//     price: 808,
//     description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
//     image_url: "Images/Cap Image.jpeg"
//   },
//   {
//     id: 11,
//     title: "Awesome Bronze Car",
//     price: 382,
//     description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
//     image_url: "Images/Cap 1 Images.jpeg"
//   },
//   {
//     id: 12,
//     title: "Recycled Rubber Cheese",
//     price: 30,
//     description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
//     image_url: "Images/Cap 2 Image.jpeg"
//   }
// ];

// const card_Container = document.getElementById("Card-Container")

// container_arr.forEach(element => {
//     const card_div = document.createElement("div")
//     let cards_Info = (`<img src="${element.image_url}">
//     <h3 class="Title">Title : ${element.title}</h3><h3>Id : ${element.id}</h3><h3>Price :
//     ${element.price}</h3><hr><h3>${element.description}</h3>`)
//     card_div.innerHTML += cards_Info
//     card_Container.appendChild(card_div)
// });         

// Map Loop For Destructuring

// const container_arr = [
//   {
//     id: 4,
//     title: "NewTitle",
//     price: 205,
//     description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
//     image_url: "Images/ShirtImage.jpeg"
//   },
//   {
//     id: 7,
//     title: "Ergonomic Wooden <br> Tuna",
//     price: 743,
//     description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
//     image_url: "Images/Trouser Image.jpeg"
//   },
//   {
//     id: 9,
//     title: "Electronic Bronze Chips",
//     price: 808,
//     description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
//     image_url: "Images/Cap Image.jpeg"
//   },
//   {
//     id: 11,
//     title: "Awesome Bronze Car",
//     price: 382,
//     description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
//     image_url: "Images/Cap 1 Images.jpeg"
//   },
//   {
//     id: 12,
//     title: "Recycled Rubber Cheese",
//     price: 30,
//     description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
//     image_url: "Images/Cap 2 Image.jpeg"
//   }
// ];

// const card_Container = document.getElementById("Card-Container")

// container_arr.map(element => {
//     const card_div = document.createElement("div")
//     let cards_Info = (`<img src="${element.image_url}">
//     <h3 class="Title">Title : ${element.title}</h3><h3>Id : ${element.id}</h3><h3>Price :
//     ${element.price}</h3><hr><h3>${element.description}</h3>`)
//     card_div.innerHTML += cards_Info
//     card_Container.appendChild(card_div)
// });         