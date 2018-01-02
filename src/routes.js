import Exam from './assets/Exam.vue';
import Introdaction from './assets/Introdaction.vue';
import Quiz from './assets/Quiz.vue';
import Success from './assets/SuccessPage.vue';
import UserProfile from './assets/UserProfile.vue';



export const routes= [
    {path: '/exam', components: {
        default: Exam
      }},
    {path: '/introdaction', components: {
          default: Introdaction
    }},
    {path: '/quiz', components: {
          default: Quiz
    }},
    {path: '/success', components: {
          default: Success
    }},
    {path: '/userProfile', components: {
          default: UserProfile
    }}
    ];
