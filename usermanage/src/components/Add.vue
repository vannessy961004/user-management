<template>
  <div class="add container">
    <toast v-if="message" :message="message"></toast>
    <h1 class="page-header">添加用户</h1>
    <form @submit.prevent="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="customer.education">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
          <textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Toast from "./Toast.vue"
  
  export default {
    name: "Add",
    components:{
      Toast
    },
    data() {
      return {
        customer: {},
        message:''
      }
    },
    methods: {
      addCustomer() {
        if(!this.customer.name || !this.customer.phone ||!this.customer.email) {
          this.message = "请输入对应信息"
          console.log("请输入对应信息")
        } else {
          this.$axios.post("http://localhost:3000/users",this.customer)
          .then(res => {
            this.$router.replace({
              path: "./home",
              query: {
                message: "用户添加成功!"
              }
            })
          })
          .catch(err => {
            console.log(err)
          })
        }

      }
    }
  }
</script>

<style scoped>

</style>
