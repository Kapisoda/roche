import Vue from 'vue'
import VueCookie from 'vue-cookie'
var cookieJar = new Vue()
Vue.use(VueCookie);



var CookieService = {

    setCookie (content, expires){
      
      content = JSON.stringify(content)
      cookieJar.$cookie.set('idp-auth', content, {expires: expires})
      console.log(JSON.parse(cookieJar.$cookie.get('idp-auth')) )
      console.log(cookieJar.$cookie.get('idp-auth'))
  }
}
export default CookieService
