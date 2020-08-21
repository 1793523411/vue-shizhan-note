var app = new Vue({
  el: "#app",
  data: {
      tag:false
,    list: [
      // [
      // {type:'A'},
      {
        id: 1,
        name: "iPhon 7",
        price: 1548,
        count: 5,
        select: false,
      },
      {
        id: 2,
        name: "iPhon 8",
        price: 2568,
        count: 6,
        select: false,
      },
      {
        id: 3,
        name: "iPhon 9",
        price: 2654,
        count: 2,
        select: false,
      },
      //   ],
      //   [
      //       {type:'B'},
      //     {
      //       id: 1,
      //       name: "iPhon 7",
      //       price: 1548,
      //       count: 5,
      //     },
      //     {
      //       id: 2,
      //       name: "iPhon 8",
      //       price: 2568,
      //       count: 6,
      //     },
      //     {
      //       id: 3,
      //       name: "iPhon 9",
      //       price: 2654,
      //       count: 2,
      //     },
      //   ],
    ],
  },
  computed: {
    totalPrice: function () {
      var total = 0;
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].select === true) {
          var item = this.list[i];
          total += item.price * item.count;
        }
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ",");
    },
  },
  methods: {
    handleReduce: function (index) {
      if (this.list[index].count === 1) return;
      this.list[index].count--;
    },
    handleAdd: function (index) {
      this.list[index].count++;
    },
    handleRemove: function (index) {
      this.list.splice(index, 1);
    },
    handleClick: function (index) {
      console.log("---");
      this.list[index].select = !this.list[index].select;
    },
    clickAll:function(){
        this.list.map((item) =>{

            // console.log(item)
            item.select = !item.select
            this.tag = item.select
            console.log(this.tag)
        })
    }

  },
});

Vue.component("sel", {
  template: `<input type="box">`,
});
