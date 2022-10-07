import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 选项式API (options API)
// export const useCountStore = defineStore({
//     'id': 'count',
//     state: () => {
//         return {
//             count: 1
//         }
//     },
//     getters: {
//         doubleCount(state) {
//             return state.count * 2
//         }
//     },
//     actions: {
//         increment() {
//             this.count++
//         }
//     }
// })

// 组合式API (composition API)
export const useCountStore = defineStore('count', () => {
    const count = ref(1);
    const doubleCount = computed(() => count.value*2)
    function increment() {
        count.value++
    }
    return { count, doubleCount, increment }
})

// 总结:
// 1. 组合式的ref, reactive定义的变量, 等价于选项式的state;
// 2. 组合式的computed属性, 等价于选项式的getters;
// 3. 组合式的导出函数, 等价于选项式的actions.
