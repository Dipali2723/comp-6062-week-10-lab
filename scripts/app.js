console.log('Loaded!');

const app=Vue.createApp({
    data(){
        return{
            title: 'Week 10 Lab'
        }
        userInput: ''
    }
});

app.mount('#app');