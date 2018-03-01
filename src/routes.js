import Exam from './assets/Exam.vue';
import Introduction from './assets/Introduction.vue';
import Quiz from './assets/Quiz.vue';
import Success from './assets/SuccessPage.vue';
import UserProfile from './assets/UserProfile.vue';



export const routes= [
    {path: '/exam', name: 'exam', components: {
        default: Exam
      }},
    {path: '/introduction', components: {
          default: Introduction
    }},
    {path: '/quiz', components: {
          default: Quiz
    }},
    {path: '/success', components: {
          default: Success
    }},
    {path: '/userProfile', components: {
          default: UserProfile
    }},
    // {path: '/redirect-me', redirect: {name: 'home'}}
    {path: '*', redirect: {name: 'exam'}}
    ];
