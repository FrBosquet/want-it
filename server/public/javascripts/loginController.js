console.log('ready');
const msg = $('#msg');
const login = $('#login');
const fblogin = $('#fblogin');
const logout = $('#logout');

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

fblogin.on('click', e=>{
  $.ajax({
    url: `/user/facebook`,
    method: 'GET'
  }).then( response => {
    console.log(response);
    window.location.replace('/user');
  });
})
