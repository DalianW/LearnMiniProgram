Page({
  data: {
    name: '小表弟',
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 30},
      {id: 111, name: 'james', age: 20},
      {id: 112, name: 'curry', age: 32},
      {id: 113, name: 'why', age: 18}
    ],
    counter: 0
  },
  handleBtnClick(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubstaction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})