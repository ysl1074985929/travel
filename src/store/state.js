// 该文件存放的是公共数据，其他组件用this.$sotore.state.属性名访问（如city）
let defaultCity = '厦门'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
