<template>
  <div class="hello">
    helloworld
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }    /*
    .mui-bar-tab .mui-tab-item-lib.mui-active{
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-lib{
     display: table-cell;
     overflow: hidden;
     width: 1%;
     height: 50px;
     text-align: center;
     vertical-align: middle;
     white-space: nowrap;
     text-overflow: ellipsis;
     color: #929292;
   }
  .mui-bar-tab .mui-tab-item-lib .mui-icon{
    top:3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-lib .mui-icon ~ .mui-tab-label{
    font-size:11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

    */
</style>
