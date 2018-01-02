<template>
  <div id="app">
    <p>
      <router-link to="/introdaction" tag="li" activeClass="active" exact><a>Introdaction</a></router-link>
      <router-link to="/exam" tag="li" activeClass="active"><a>Exam</a></router-link>
 </p>


 <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTF4AoJCxPIU_bxYhpNkReBOkEeXTnuIhK2HGbx19EhxLfGBDVwg0Yi6LJkrk1ocXuIKRJzrP9PM8P2/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>





 <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  }
}

</script>

<style lang="scss">

</style>
