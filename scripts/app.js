console.log('Loaded!');

const app=Vue.createApp({
    data(){
        return{
            title: 'Week 10 Lab',
            user: {
            firstName: '',
            lastName: ''
            },
            count: 0,
            PriceperItem:10,
            quantity: 0
        }
    },
    computed: {
        FullName(){
            return `${this.user.firstName} ${this.user.lastName}`;
        },
        totalprice(){
            return this.quantity * this.PriceperItem
        }
    
    },
    methods:{
        clearField(){
            this.user.firstName='';
            this.user.lastName='';
            this.quantity= 0;
        }
    }
    
});

app.mount('#app');