import { ref, onMounted, onUnmounted } from "vue";

export function useMouse1() {
    // 被组合式函数封装和管理的状态
    const x1 = ref(0)
    const y1 = ref(0)

    // 组合式函数可以随时更改其状态。
    function update(event) {
        x1.value = event.pageX
        y1.value = event.pageY
    }

    // 一个组合式函数也可以挂靠在所属组件的生命周期上
    // 来启动和卸载副作用
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    // 通过返回值暴露所管理的状态
    return { x1, y1 }
}