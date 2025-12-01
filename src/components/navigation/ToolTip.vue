<script setup>
import { ref } from 'vue'
import { useTippy } from 'vue-tippy'
import { useRouter } from '#app'

const props = defineProps({
    label: String,
    mainLink: {
        type: String,
        default: ''
    },
    items: {
        type: Array,
        default: () => []
    }
})

const triggerRef = ref(null)
const router = useRouter()

useTippy(triggerRef, {
    placement: 'bottom',
    animation: false,
    hideOnClick: true,
    offset: [0, 10],
    duration: 100,
    interactive: true,
    arrow: true,
    theme: 'light',
    content: () => {
        const container = document.createElement('div')
        container.className =
            'flex gap-10 p-6 bg-brand-green text-white text-left text-base rounded-2xl'

        const leftCol = document.createElement('div')
        leftCol.className = 'flex flex-col space-y-4 min-w-[200px]'

        props.items.forEach(item => {
            const link = document.createElement('div')
            link.textContent = item.label
            link.className =
                'cursor-pointer hover:text-brand-gold transition-colors duration-100'

            link.addEventListener('click', () => {
                router.push(item.to)
            })

            link.addEventListener('mouseleave', () => {
                img.classList.add('hidden')
            })

            leftCol.appendChild(link)
        })

        container.appendChild(leftCol)

        return container
    }
})

</script>

<template>
    <div ref="triggerRef"
        class="px-1 transition-colors duration-ease-fluid whitespace-nowrap relative group cursor-pointer hover:text-brand-gold"
        @click="mainLink && router.push(mainLink)">
        {{ label }}
        <span
            class="absolute bottom-4 left-0 w-0 h-0.5 text-black hover:text-brand-gold group-hover:w-full transition-all duration-300"></span>
    </div>
</template>

<style>
/* săgeata albă */
.tippy-box[data-theme~='light']>.tippy-arrow::before {
    color: white !important;
}
</style>
