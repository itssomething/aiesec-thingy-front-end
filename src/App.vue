<template>
  <div id="app">
    <div id="nav">
      <router-link to="/opps">Opps</router-link> |
      <router-link to="/histories">History</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.el-card {
  cursor: pointer;
}

.el-card p {
  text-align: left;
}

.img-container {
  height: 200px;      /* equals max image height */
  white-space: nowrap;
  text-align: center; margin: 1em 0;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.image {
  background: #3A6F9A;
  vertical-align: middle;
}

</style>
