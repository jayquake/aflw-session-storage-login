const valid_name = localStorage.getItem("register_name");
const valid_email = localStorage.getItem("register_email");
const valid_sandi = localStorage.getItem("register_sandi");

const login_email = localStorage.getItem("login_email");
const login_sandi = localStorage.getItem("login_sandi");

const user_login = document.getElementById("user-login");
const user_info = document.getElementById("user-info");

const logout_button = document.getElementById("logout-btn");
const delete_button = document.getElementById("delete-btn");

window.onload = function () {
  if ((login_email, login_sandi === null)) {
    alert("Login first!!");
    window.location = "login.html";
    return false;
  } else {
    logout_button.classList.remove("hidden");
    delete_button.classList.remove("hidden");
    user_login.innerHTML = `
        <center class="font-sans text-md font-bold mt-1">
        <h1 class="text-2xl mb-4 lead">My Account<hr /> <span class="animate-pulse"></span></h1><br>
       
        <h5 class="my-3">${valid_name}</h5>
                <p class="text-muted mb-1">Full Stack Developer</p>
                <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div class="d-flex justify-content-center mb-2">        
        </center>
        `;
    user_info.innerHTML = `
    <div class="card mb-4">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Full Name</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">${valid_name}</p>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Email</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">${login_email}</p>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Phone</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">(098) 765-4321</p>
          </div>
        </div>
        <hr />
        
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Address</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
        `;
  }
};

logout_button.addEventListener("click", function () {
  localStorage.removeItem("login_email");
  localStorage.removeItem("login_sandi");
  window.location = "/";
});

delete_button.addEventListener("click", function () {
  localStorage.removeItem("register_name");
  localStorage.removeItem("register_email");
  localStorage.removeItem("register_sandi");
  localStorage.removeItem("login_email");
  localStorage.removeItem("login_sandi");
  window.location = "register.html";
});
