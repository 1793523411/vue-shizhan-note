var app = new Vue({
    el: '#app',
    data() {
        return {
            columns: [
                {
                    title:'姓名',
                    key:'name'
                },
                {
                    title:'年龄',
                    key: 'age',
                    sortable:true
                },
                {
                    title:'出生日期',
                    key:'birthday',
                    sortable:true
                },
                {
                    title:'地址',
                    key:'address'
                }
            ],
            data: [
                {
                    name:'小明11',
                    age:18,
                    birthday: '1999-02-21',
                    address: '北京市朝阳区'
                },
                {
                    name:'小明222',
                    age:20,
                    birthday: '1999-02-21',
                    address: '北京市朝阳区'
                },
                {
                    name:'小明333',
                    age:14,
                    birthday: '1999-02-21',
                    address: '北京市朝阳区'
                },
                {
                    name:'小明44',
                    age:24,
                    birthday: '1999-02-21',
                    address: '北京市朝阳区'
                }
            ]
        }
    },
    methods: {
        handleAddData: function(){
            this.data.push({
                name:'刘小天',
                age:19,
                birthday:'1896-06-18',
                address:'河南省焦作市'
            })
        }
    },
})