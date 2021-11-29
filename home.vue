<template>
<div>
  <img   src="/assets/dms1.jpg">
   </div>
<h1>K-DMS DOCUMENTS MANAGEMENT APPLICATION</h1>

<form>
 <v-col cols="12">
 </v-col>
  <div class="home">
 
<h2>To continue please select the department</h2>
<br>

Department:

<ul>

 <div class="cash">
  <li><router-link to="/cash">Cash</router-link></li>
  </div>
 <div class="ops">
 <li><router-link to="/ops">Operations</router-link>
 </li>
 </div>
 <div class="cs">
  <li><router-link to="/cs">Customer_Service</router-link></li>
  </div>
 
 <div class="relation">  
 <li><router-link to="/relations">Relationship</router-link></li>
 </div>

</ul>
  </div>

   <div>
 
<button @click="signOut"> Sign-Out</button>
         
 </div>
  </form>
 
 <router-view/>
  

</template>


<style scoped>
li  {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  }
  li:hover{

  background-color: white;
  }
 .cash {
  background-color: grey;
  color: white;
}
 .ops {
  background-color: grey;
  color: white;
}
 .cs {
  background-color: grey;
  color: white;
  text-color:black;
}
 .relation {
  background-color: grey;
  color: white;
}
form {margin: auto;
  width: 100%;
  border: 3px solid green;
  padding: 10px;
  width: 50%;
   text-align: center
  }
h1{
  text-align:center;
  padding: 10px;
}
p{font:12
	
}
 

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  background: #23a9e0;
  cursor: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cockroach%20(2).ico'), default;
  -webkit-overflow-scrolling: touch;
}

#app {
  -webkit-tap-highlight-color: transparent;
}

svg {
  width: 100vw;
  height: 100vh;
  max-height: 400px;
  margin-left: 20vw;
}

p {
  font-size: 16px;
  color: white;
  text-align: center;
}



</style>
 

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  

