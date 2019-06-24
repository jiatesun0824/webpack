const say = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('完成')
    }, 2000)
  })
}
export default say