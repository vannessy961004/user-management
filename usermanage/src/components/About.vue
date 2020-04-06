<template>
  <div class="about  container">
    <h3 class="page-header">联系方式:</h3>
    <div>
      <h4 class="text-left">手机号码:</h4>
      <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-phone-alt"></span>
          18927284788
        </li>
      </ul>
    </div>
    <div>
      <h4 class="text-left">邮箱地址:</h4>
      <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-envelope"></span>
          709499719@qq.com
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-envelope"></span>
          vannessy0524@163.com
        </li>
      </ul>
    </div>
    <div>
      <h4 class="text-left">二维码:</h4>
      <div class="pull-left QRcode" >
        <img src="../assets/img/wechat.jpg" title="微信" class="img-thumbnail">
        <img src="../assets/img/QQ.jpg" title="QQ" class="img-thumbnail">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>
  .QRcode img {
    width: 350px;
    height: 350px;
  }
</style>
