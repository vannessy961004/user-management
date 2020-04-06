<template>
  <div class="edit container">
    <toast v-if="message" :message="message"></toast>
    <h1 class="page-header">编辑用户</h1>
    <form @submit.prevent="updateCustomer">
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
        <button type="submit" class="btn btn-primary">确定</button>
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
      updateCustomer() {
        if(!this.customer.name || !this.customer.phone ||!this.customer.email) {
          this.message = "请输入对应信息"
          console.log("请输入对应信息")
        } else {
          this.$axios.put("http://localhost:3000/users/" + this.$route.params.id,this.customer)
          .then(res => {
            this.$router.replace({
              path: "/home",
              query: {
                message: "用户更新成功!"
              }
            })
          })
          .catch(err => {
            console.log(err)
          })
        }
      },
      getData(id) {
        this.$axios({
          method:"get",
          url:"http://localhost:3000/users/" + id
        }).then(res => {
          this.customer = res.data
          // console.log(this.customer)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created() {
      this.getData(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
