<template>
    <main class="form-signin w-25 mt-0 pt-5 mx-auto">
        <div class="col">
            <div class="card bg-dark shadow-sm">
              <div class="card-body">
                <form>
                    <h1 class="h3 mb-3 fw-normal tulisan">Register to Vantage</h1>
                    <h4 class="h5 mb-3 fw-normal tulisan">Enter your details below</h4>
                    <div class="form-floating my-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name">
                        <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating my-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="username">
                        <label for="floatingInput">Username</label>
                      </div>
                    <div class="form-floating my-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                      <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating my-3">
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating my-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Confirm Your Password</label>
                      </div>
                
                    <div class="checkbox mb-3">
                      <label class="ms-1 tulisan">
                        <input type="checkbox" value="remember-me"> By clicking Sign up, I hereby agree and consent to the Terms & Conditions and I confirm that I have read the Privacy Policy.
                      </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                  </form>
              </div>
            </div>
          </div>
        
      </main>
</template>