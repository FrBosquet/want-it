console.log('ready');
const msg = $('#msg');
const login = $('#login');
const fblogin = $('#fblogin');
const logout = $('#logout');
const userlist = $('#user-list');
const wishlist = $('#wish-list');
const brandlist = $('#brand-list');
const productlist = $('#product-list');
const postlist = $('#post-list');
const editionlist = $('#edition-list');

login.on('submit', e=>{
  e.preventDefault();
  const username = $('#login input[name = "username"]').val();
  const password = $('#login input[name = "password"]').val();
  console.log({username, password});
  $.ajax({
    url: `/user/login`,
    // withCredentials: true,
    data: {username, password},
    // dataType: 'JSON',
    method: 'POST'
  }).then( response => {
    console.log(response);
    window.location.replace('/user');
  });
})

logout.on('click', e => {
  $.ajax({
    url: `/user/logout`,
    method: 'GET'
  }).then( response => {
    console.log(response);
    window.location.replace('/user');
  });
})

userlist.ready(()=>{
  $.get({
    url: '/user/all'
  }).then( response => {
    response.users.forEach(user =>{
      userlist.append(`<li><strong>${user.name}</strong> : ${user._id}</li>`);
    })
  })
})

wishlist.ready(()=>{
  $.get({
    url: '/wish'
  }).then( response => {
    response.wishes.forEach(wish =>{
      wishlist.append(`<li><strong>${wish.editionId.productId.brandId.name} ${wish.editionId.productId.name} ${wish.editionId.name}</strong> for ${wish.userId.name} -- ${wish._id}</li>`);
    })
  })
})

postlist.ready(()=>{
  $.get({
    url: '/post'
  }).then( response => {
    response.posts.forEach(post =>{
      postlist.append(`<li><strong>${post.wishId.editionId.productId.brandId.name} ${post.wishId.editionId.productId.name} ${post.wishId.editionId.name}</strong> for ${post.wishId.userId.name} says "${post.comment}" -- ${post._id}</li>`);
    })
  })
})

brandlist.ready(()=>{
  $.get({
    url: '/brand'
  }).then( response => {
    response.brands.forEach(brand =>{
      brandlist.append(`<li><strong>${brand.name}</strong> : ${brand._id}</li>`);
    })
  })
})

productlist.ready(()=>{
  $.get({
    url: '/product'
  }).then( response => {
    response.products.forEach(product =>{
      productlist.append(`<li><strong>${product.brandId.name} ${product.name}</strong> : ${product._id}</li>`);
    })
  })
})

editionlist.ready(()=>{
  $.get({
    url: '/edition'
  }).then( response => {
    response.editions.forEach(edition =>{
      editionlist.append(`<li><strong>${edition.productId.brandId.name} ${edition.productId.name} ${edition.name}</strong> : ${edition._id}</li>`);
    })
  })
})
