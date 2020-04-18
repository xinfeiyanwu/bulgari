<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>


<style lang="less">
*{color: #000;font-size: 14px;}
body, ul, li, h1, h2, h3, h4, h5, p, dl, dd, dt, input{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
a{
  color:  #000;
  text-decoration: none;
}
img{
  display: inline-block;
  width: 100%;
}
video{width: 100%}
input,label{
  cursor: pointer;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
