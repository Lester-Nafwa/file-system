<template>
 <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow p-2 mb-0">
  <h1 center> Admin Dashboard</h1>
</nav>
<!-- Sidebar navigation -->
<div class="container-fluid">
  <div class="row">
    <nav class="col-md-2 d-md-block bg-light sidebar vh-100" style="margin-top: 60px;">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
         <li class="nav-item">
            <router-link class="nav-link link-dark" to="/home">
             Home
          </router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-dark" to="/register">
             Create User
          </router-link> 
          </li>
          
          <li class="nav-item">
           
            <router-link class="nav-link link-dark" to="/Addstaff">
             Add Staff
           </router-link>
          </li><br>
         
          <li class="nav-item">
            <router-link class="nav-link link-dark" to="/stafflist">
             Members List
          </router-link> 
          </li>
        </ul>
      </div>
    </nav>
    <!-- Main content -->
    <main role="main" style="margin-top: 50px;" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <div class="inner-adjust">
        <!-- Use router template to show the components for which router service is activated -->
         <router-view />
      </div>
    </main>
  </div>
</div>
<div class="jumbotron text-center mb-0 fixed-bottom bg-dark text-white">
 <p>k-dms.co.ke</p> 
</div>
<router-view></router-view>
</template>
 


