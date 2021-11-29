<template>

<div id="nav1">
    <router-link to="/">Home</router-link> 
  </div>
 <h1>CASH DEPARTMENT</h1>

  <div class="file">
   <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <div class="fields">
        <lable for=upload>Upload File :</lable>
        <input type="file" ref="file" @change="onSelect"/>
      </div><br>
<div class="fields">
 <label for="download">Download:</label> <input type="file" name="fileTodownload" id="fileTodownload"></div>
<br>
  <div class="fields">
        <button>Submit</button>
      </div><br>
      <div class="message">
        <h5>{{message}}</h5>
      </div>
   </form>
  </div>
  <router-view/>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FileUpload',
  data() {
    return {
      file:"",
      message:""
    }
  },
  methods: {
    onSelect(){
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png",".pdf,.doc"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if(!allowedTypes.includes(file.type)){
        this.message = "Filetype is wrong!!"
      }
      if(file.size>1000000){
        this.message = 'Too large, max size allowed is 500kb'
      }
    },
    async onSubmit(){
      const formData = new FormData();
      formData.append('file',this.file);
      try{
        await axios.post('http://localhost:5000/upload',formData);
        this.message = 'Uploaded!!'
      }
      catch(err){
        console.log(err);
        this.message = err.response.data.error
      }
    }
  },
}
</script>
<style scoped>

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
#nav1{text-align: center;
  

}
 </style>