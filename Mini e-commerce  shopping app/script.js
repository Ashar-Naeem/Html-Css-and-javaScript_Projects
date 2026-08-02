const products = [
    {
        name: "Laptop",
        price: 500,
        image: "./images/laptop.jpg"
    },
    {
        name: "Mouse",
        price: 300,
        image: "./images/mouse.jpg"
    },
    {
        name : "Speaker",
        price: 100,
        image: "./images/speaker.jpg"
    }
];

let count=0;
products.forEach(product=>{
    const container=document.querySelector(".container");

    const box= document.createElement("div");
    box.classList.add("box");

    const image =document.createElement("img");
    image.src=product.image;
    image.classList.add("image");

    const name= document.createElement("p");
    name.textContent=`Name : ${product.name}`;

    const price= document.createElement("p");
    price.textContent=`Price : ${product.price}`;
    const button=document.createElement("button");
    button.textContent="Add to cart";
    container.append(box);
    box.append(image,name,price,button);
    button.addEventListener("click",()=>{
    const cartvalue=document.querySelector("span");
    count++;
    cartvalue.textContent=count;

})
})





