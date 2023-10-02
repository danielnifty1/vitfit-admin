const isLoggedIn = sessionStorage.getItem("ozubulu");

headers = {
    authorization: `Bearer ${JSON.parse(isLoggedIn)}`,
    'Content-Type': 'application/json;charset=UTF-8',
}


 function logout(){
    sessionStorage.removeItem("ozubulu")
    location.replace("signin.html")
}