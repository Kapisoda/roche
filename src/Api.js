import Vue from 'vue'
import VueResource from 'vue-resource';
import Resources from './Resources.js'
Vue.use(VueResource);



Vue.http.interceptors.push((request, next)=>{  /*PUT umjesto POSTA piše preko postoječeg dok post stvara novi */
  request.headers.set('Authorization', 'Token token="mXHTwozrz-m4NgE1QRmn", identifier="adminko"')
    request.headers.set('Content-Type', 'application/json')
  //request.headers.set('Authorization', 'Token token="8dJEMDTrTSP6H8r-YigN", identifier="primjer@mail.com", first_name="Primjer", last_name="Primjercic"')
  //request.headers.set('Content-Type', 'application/json')
    next()
});
