Vue.component("vTable", {
  props: {
    columns: {
      type: Array,
      default: function () {
        return [];
      },
    },
    data: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      currentColumns: [],
      currentData: [],
    };
  },
  methods: {
    makeColumns: function () {
      this.currentColumns = this.columns.map((col, index) => {
        col._sortType = "normal";
        col._index = index;
        return col;
      });
      console.log(this.currentColumns)
    },
    makeData: function () {
      this.currentData = this.data.map((row, index) => {
        row._index = index;
        return row;
      });
      console.log(this.currentData)
    },
    handleSortByAsc: function (index) {
      var key = this.currentColumns[index].key;
      this.currentColumns.forEach((col) => {
        col._sortType = "normal";
      });
      this.currentColumns[index]._sortType = "asc";

      this.currentColumns.sort((a, b) => {
        return a[key] > b[key] ? 1 : -1;
      });
    },
    handleSortByDesc: function (index) {
      var key = this.currentColumns[index].key;
      this.currentColumns.forEach((col) => {
        col._sortType = "normal";
      });
      this.currentColumns[index]._sortType = "desc";
      this.currentColumns.sort((a, b) => {
        return a[key] < b[key] ? 1 : -1;
      });
    },
  },
  mounted() {
    this.makeColumns();
    this.makeData();
  },
  watch: {
    data: function () {
      this.makeData();
      var sortedColumn = this.currentColumns.filter((col) => {
        return col._sortType !== "normal";
      });
      if (sortedColumn.length > 0) {
        if (sortedColumn[0]._sortType === "asc") {
          this.handleSortByAsc(sortedColumn[0]._index);
        } else {
          this.handleSortByDesc(sortedColumn[0]._index);
        }
      }
    },
  },
  render(h) {
    var _this = this;
    var ths = [];
    var trs = [];
    this.currentData.forEach((row) => {
      var tds = [];
      _this.currentColumns.forEach((cell) => {
        tds.push(h("td", row[cell.key]));
      });
      trs.push(h("tr", tds));
    });
    this.currentColumns.forEach((col, index) => {
      if (col.sortable) {
        ths.push(
          h("th", [
            h("span", col.title),
            h(
              "a",
              {
                class: {
                  on: col._sortType == "asc",
                },
                on: {
                  click: function () {
                    _this.handleSortByAsc(index);
                  },
                },
              },
              "升"
            ),
            h(
              "a",
              {
                class: {
                  on: col._sortType === "desc",
                },
                on: {
                  click: function () {
                    _this.handleSortByDesc(index);
                  },
                },
              },
              "降"
            ),
          ])
        );
      } else {
        ths.push(h("th", col.title));
      }
    });
    return h("table", [
      h("thead", [h("tr", ths)]),
      h("tbody", trs),
    ]);
  },
});
