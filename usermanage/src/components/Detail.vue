<template>
  <div class="detail container">
    <router-link to="/home" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
      <span class="glyphicon glyphicon-user"></span>
      {{customer.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/' + customer.id">
          编辑
        </router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone-alt"></span>
        {{customer.phone}}
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope"></span>
        {{customer.email}}
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-book"></span>
        {{customer.education}}
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-home"></span>
        {{customer.graduationschool}}
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-briefcase"></span>
        {{customer.profession}}
      </li>
      <li class="list-group-item profile">
        <span class="glyphicon glyphicon-comment"></span>
        {{customer.profile}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        customer:{}
      }
    },
    created() {
      this.detailData(this.$route.params.id)
    },
    methods: {
      detailData(id){
        this.$axios({
          method:"get",
          url:"http://localhost:3000/users/" + id
        }).then(res => {
          this.customer = res.data
          // console.log(this.customer)
        }).catch(err => {
          console.log(err)
        })
      },
      deleteCustomer(id) {
        // console.log(id)
        this.$axios({
          method:"delete",
          url:"http://localhost:3000/users/" + id
        }).then(res => {
          this.$router.replace({path:"/home",query:{message:"用户删除成功!"}})
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .profile {
    height: 200px;
  }
</style>
