<template>
  <div id="app">

    <ul class="list-group">
            <router-link
                    tag="li"
                    to="/exam"
                    class="list-group-item"
                    style="cursor: pointer">User 1</router-link>
                    <router-link
                            tag="li"
                            to="/quiz"
                            class="list-group-item"
                            style="cursor: pointer">User 2</router-link>

        </ul>

<router-view></router-view>
    <appIntroduction></appIntroduction>
    <button v-on:click="prebaci">prebaci</button>
    <button v-on:click="postaviCookie">postaviCookie</button>
    <p>
      {{courses.title}}
    </p>
    <p>
      {{courses.description}}
    </p>
    <img v-bind:src="courses.picture" />

  <ul v-for="arr in courses.curriculum">
    <li>
      {{arr.title}}
      {{arr.title}}
    </li>
  </ul>
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
          "course" : {
        		"id" : "1"
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

    this.$http.post('https://e-learning-platform-test.herokuapp.com/api/v1/courses/show', this.course).then(response => {

    // success callback
    return response.json();
  }, error => {
    // error callback
    alert('nije prošlo');
    console.log(error);
  }).then(data => {
    //obrada podataka
    this.courses.title = data.course.title;
    this.courses.description= data.course.description;
    this.courses.picture= data.course.picture;
    this.courses.curriculum = data.course.curriculum;
    console.log(data.course.curriculum);
    let tokenContent = {
      auth_token: ''+ data.course.title,
      identifier: ''+ data.course.description
    }
    Cookie.setCookie(tokenContent, '1D');
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
