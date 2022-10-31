const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const navIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const menuCart = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleDesktopMenu)
navIcon.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleCartMenu)


function toggleDesktopMenu() {
    menuCart.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    menuCart.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}
function toggleCartMenu() {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    menuCart.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'PcCom Bronze Intel Core i5-10400/8GB/1TB+480SSD',
    price: 509.99,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/35/350230/1523-pccom-bronze-intel-core-i5-10400-8gb-1tb-480ssd.jpg'
},
{
    name: 'PcCom Gold Pro AMD Ryzen 5 5600X/16GB/1TB SSD/RTX 3060',
    price: 1564.08,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1005/10057589/1478-pccom-gold-pro-amd-ryzen-5-5600x-16gb-1tb-ssd-rtx-3060-comprar.jpg'
},
{
    name: 'TV 80" LG',
    price: 430.99,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/co/feature/124075258/co-feature-extreme-spectrum-of-contrast-and-sound-417881525?$FB_TYPE_A_MO_JPG$'
},
{
    name: 'PC Racing AMD Ryzen 5 4600G/16GB/1TB+256GB SSD',
    price: 563.94,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1036/10361615/1698-pc-racing-amd-ryzen-5-4600g-16gb-1tb-256gb-ssd.jpg'
},
{
    name: 'ASUS GeForce RTX 2060 Dual OC EVO Edition 6GB GDDR6',
    price: 350.98,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/23/233569/1.jpg'
},
{
    name: 'Gigabyte GeForce RTX 3060 GAMING OC 12GB GDDR6 Rev 2.0',
    price: 470.99,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/43/432064/1343-gigabyte-geforce-rtx-3060-gaming-oc-12gb-gddr6-rev-20.jpg'
},
{
    name: 'Zotac Gaming GeForce RTX 4090 TRINITY OC 24GB GDDR6X',
    price: 2319,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1059/10595093/1923-zotac-gaming-geforce-rtx-4090-trinity-oc-24gb-gddr6x-foto.jpg'
},
{
    name: 'AMD Ryzen 7 5800X 3.8GHz',
    price: 295.89,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/32/328473/168-amd-ryzen-7-5800x-38ghz.jpg'
},
{
    name: 'AMD Ryzen 5 7600X sin Cooler 4.7 GHz Box',
    price: 359.99,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1057/10570001/1244-amd-ryzen-5-7600x-sin-cooler-47-ghz-box.jpg'
},
{
    name: 'AMD Ryzen 9 5900X 3.7 GHz',
    price: 434.99,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/32/328702/1997-amd-ryzen-9-5900x-37-ghz.jpg'
})

function renderProducts(arr) {
    productList.forEach(product => {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
    })
}
renderProducts(productList)