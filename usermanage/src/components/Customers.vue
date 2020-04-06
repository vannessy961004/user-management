<template>
  <div class="customers container">
    <toast v-if="message" :message="message"></toast>
    <h1 class="page-header">用户管理系统</h1>

    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">

    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in filterBy(customers,filterInput)" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td><router-link class="btn btn-default" :to="'/detail/' + item.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Toast from "./Toast.vue"

  export default {
    name: "Customers",
    data(){
      return {
        customers: [],
        message: "",
        filterInput:""
      }
    },
    components:{
      Toast
    },
    methods:{
      customersData(){
        this.$axios({
          method:"get",
          url:"http://localhost:3000/users"
        }).then(res => {
          this.customers = res.data
        }).catch(err => {
          console.log(err)
        })
      },
      filterBy(customers,value) {
        return customers.filter(function(item) {
          return item.name.toLocaleLowerCase().match(value) || item.name.toLocaleUpperCase().match(value)
        })
      }
    },
    created() {
      if (this.$route.query.message){
        this.message = this.$route.query.message
      }
      this.customersData()
    },
  }
</script>

<style scoped>

</style>
