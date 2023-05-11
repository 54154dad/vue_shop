<template>
  <div class="login">
    <div class="mui-content">
      <form class="mui-input-group">
        <div class="mui-input-row">
        <label>账号</label>
        <input v-model="loginForm.username" type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
      </div>

        <div class="mui-input-row">
          <label>密码</label>
          <input v-model="loginForm.password" type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
        </div>

        <div class="mui-content-padded">
          <button @click="login" type="button" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
          <div class="link-area"><a @click="register">还没有账号? 前往注册</a></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        loginForm:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      login(){

      },
      register(){
        this.$router.push({name:'register'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>