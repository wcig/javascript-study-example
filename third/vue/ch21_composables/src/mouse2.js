import { ref, onMounted, onUnmounted } from "vue";
import { useEventListener } from "./event.js";

export function useMouse2() {
    // 被组合式函数封装和管理的状态
    const x2 = ref(0)
    const y2 = ref(0)

    useEventListener(window, 'mousemove', (event) => {
        x2.value = event.pageX
        y2.value = event.pageY
    })

    // 通过返回值暴露所管理的状态
    return { x2, y2 }
}