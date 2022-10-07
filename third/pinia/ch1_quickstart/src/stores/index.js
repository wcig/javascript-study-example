import { createPinia } from 'pinia'

const store = createPinia()

// 自定义插件
function SecretPiniaPlugin() {
    return { secret: '123456' }
}
store.use(SecretPiniaPlugin)

export default store