import { observable } from 'mobx'

const HomeStore = observable({
  list:[{id:1,name:'boonook'},{id:2,name:'boonook_2'}],
  getList(data) {
    console.log(data)
  },
})
export default HomeStore
