const products = [
    {
        name: "Ball",
        category: "Sport",
        img: "./assets/ball.jpeg",
        price: 100,
        description: 'Just the simple ball'
    },
    {
        name: "Gloves",
        category: "Sport",
        img: "./assets/gloves.jpg",
        price: 140,
        description: 'Tactical gloves'
    },
    {
        name: "Sport shoes",
        category: "Sport",
        discount: true,
        img: "./assets/shoes.png",
        price: 320,
        description: 'Sport shoes. The best choice for running'
    },
    {
        name: "Hammer",
        category: "Tools",
        img: "./assets/hammer.jpeg",
        price: 40,
        description: 'The best way to convince somebody that you are right.'
    },
    {
        name: "Saw",
        category: "Tools",
        discount: true,
        img: "./assets/saw.jpeg",
        price: 75,
        description: 'This will help you in case the hammer could not convince your companion'
    },
    {
        name: "Shark toy",
        category: "Other",
        img: "./assets/shark.jpeg",
        price: 45,
        description: 'From IKEA with love'
    },
    {
        name: "Truck",
        category: "Other",
        img: "./assets/truck.jpeg",
        price: 80,
        description: 'Truck. Nothing more.'
    }
];

const productsContainer = document.querySelector('.productsContainer');

function renderProduct(product){
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.name;
  productTitle.classList.add('productTitle');

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  productPrice.classList.add('productPrice');

  const productCategory = document.createElement('p');
  productCategory.textContent = product.category;
  productCategory.classList.add('productCategory');

  const productImg = document.createElement('img');
  productImg.src = !!product.img ? product.img : '';
  productImg.classList.add('productImg');

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.classList.add('productDescription');

  productCard.append(productImg, productTitle, productPrice, productCategory, productDescription);

  return productCard;
}



function renderProductList(products) {
  productsContainer.innerHTML = '';
  products.forEach( product => {
      const renderedProduct = renderProduct(product);
      productsContainer.append(renderedProduct);
  });
}

const selectEl = document.createElement('select')

const option1 = document.createElement('option')
const option2 = document.createElement('option')
const option3 = document.createElement('option')
const option4 = document.createElement('option')
selectEl.append(option1, option2, option3, option4)
option1.value = 'Sport'
option2.value = 'Tools'
option3.value = 'Other'
option4.value = 'None'

option1.innerText = 'Sport'
option2.innerText = 'Tools'
option3.innerText = 'Other'
option4.innerText = 'None'

const nameInput = document.createElement('input')

console.log(selectEl);

const mainContainer = document.querySelector('.mainContainer')
mainContainer.append(selectEl, nameInput)

const getFilteredProducts = (category, name) => {
    const new_name = name.toLowerCase()
    console.log(new_name);
 const new_prods = products.filter((el) => {
   const elName =  el.name.toLowerCase()
   console.log(elName);
       return el.category === category && elName === new_name
    })  
    return new_prods
}



// console.log(getFilteredProducts('Other', 'Shark toy'));

// selectEl.addEventListener('change', (e) => {
//     const selectValue = e.target.value
//     console.log(selectValue);
//     if(selectValue === 'None'){
//         renderProductList(products)
//     } else {
//       const filteredProds = getFilteredProducts(selectValue);
//        renderProductList(filteredProds)
//     }
// })

const filterProducts = () => {
    const category = selectEl.value
    const name = nameInput.value.toLowerCase()
    localStorage.setItem('name', name)
    localStorage.setItem('category', category)
    const new_arr = getFilteredProducts(category, name)
    console.log(new_arr);
    renderProductList(new_arr)
}



nameInput.addEventListener('input', () => {
    filterProducts()
})

const localName = localStorage.getItem('name') 
console.log(localName);
const localCategory = localStorage.getItem('category')
nameInput.value = localName
selectEl.value = localCategory


const delete_btn = document.createElement('button')
delete_btn.innerText = "delete"

mainContainer.append(delete_btn)

delete_btn.addEventListener('click', () => {
    localStorage.clear()
    nameInput.value = ''
    selectEl.value = ''
})

