const raw = []
const arr = new Proxy(raw, {
  get(target, key) {
    console.log('get', key)
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    console.log('set', key)
    return Reflect.set(target, key, value)
  }
})

arr.push(1)