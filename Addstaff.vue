<template>
<div>
<i class="fa fa-long-arrow-left" style="font-size:36px"></i>
</div>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text  text-center">Add New Member</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    
                    <input type="text" class="form-control" placeholder ="Name" v-model="user.name" required>
                </div><br>

                <div class="form-group">
                    
                    <input type="email" class="form-control" placeholder ="Email" v-model="user.email" required>
                </div><br>

                <div class="form-group">
                
                    <input type="text" class="form-control" placeholder ="Phone Number"  v-model="user.phone" required>
                </div><br>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add User</button>
                </div><br>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../database';

    export default {
        data() {
            return {
                user: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('users').add(this.user).then(() => {
                    alert("User successfully created!");
                    this.user.name = ''
                    this.user.email = ''
                    this.user.phone = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>



<style scoped>
input[type=text], input[type=email],select {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 50%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>