<template>
  <ul class="navbar-nav mb-2 mb-lg-0">
    <li class="nav-item">
      <router-link to="/Login" class="nav-link btn btn-outline-secondary ms-4 me-2 px-4" href="#">Login</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/Register" class="nav-link btn btn-outline-light ms-2 me-4 px-3">Sign Up</router-link>
    </li>
    <div class="vr"></div>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">EN</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">ID</a></li>
        <li><a class="dropdown-item" href="#">DE</a></li>
        <li><a class="dropdown-item" href="#">JP</a></li>
      </ul>
    </li>
  </ul>
</template>