<template>
  <div id="app">


</div>
</template>

<script>
import Introduction from './assets/Introduction.vue';
import Quiz from './assets/Quiz.vue'
import Cookie from './Cookie.js'
import Api from './Api.js'
import Resources from './Resources.js'
export default {
  name: 'app',
  data () {
    return {

        course: {
          "admin" : {
        "username" : "adminko",
        "password" : "asdfasdf"
        }
        },
        courses: {
          title: '',
          description: '',
          picture: '',
          curriculum: []
        },
        someData: {}

}
  },
  components: {
    appIntroduction: Introduction
  },
  created(){

    this.$http.get('https://e-learning-platform-test.herokuapp.com/api/v1/courses/show').then(response => {

    // success callback
    return response.json();
  }, error => {
    // error callback
    alert('nije prošlo');
    console.log(error);
  }).then(data => {
    //obrada podataka

    console.log(data);

  });



},
methods: {
 postaviCookie(){


   let tokenContent = {
     auth_token: ''+ this.courses.title,
     identifier: ''+ this.courses.description
   }
   console.log(tokenContent);
   Cookie.setCookie(tokenContent, '1D');
   console.log(JSON.stringify(Resources))
 },
 prebaci(){
   this.$router.push({name: 'exam'});
 }
}
}

</script>

<style lang="scss">

</style>
