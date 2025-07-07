console.log('Loaded!');

const app=Vue.createApp({
    data(){
        return{
            title: 'Week 10 Lab',
            user: {
            firstName: 'Dipali',
            lastName: 'Ghoghari'
            }
        }
        userInput: ''
    },
    computed: {
        FullName(){
            return `${this.user.firstName} ${this.user.lastName}`;
        }
    }
});

app.mount('#app');