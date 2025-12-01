<template>
    <div class="relative flex items-center justify-center" :style="{ width: `${size}px`, height: `${size}px` }">

        <div :class="[
            'absolute rounded-full',
            'bg-brand-gold',
        ]" :style="{ width: `${size}px`, height: `${size}px` }"></div>

        <svg :width="size" :height="size" :viewBox="`0 0 ${svgSize} ${svgSize}`"
            class="absolute z-10 pointer-events-none">

            <defs>
                <path :id="textPathId1" :d="circlePath" />
            </defs>

            <text class="font-bebas-neue text-3xl font-bold uppercase fill-brand-blue-navy circular-text-1"
                :style="{ animationDuration: duration }">
                <textPath :href="`#${textPathId1}`" startOffset="0%">
                    {{ circularText1 }}
                </textPath>
            </text>

            <text class="font-bebas-neue text-3xl font-bold uppercase fill-brand-blue-navy circular-text-2"
                :style="{ animationDuration: duration }">
                <textPath :href="`#${textPathId1}`" startOffset="50%">
                    {{ circularText2 }}
                </textPath>
            </text>
        </svg>

        <div :class="[
            'z-20 rounded-full flex items-center justify-center',
            'bg-brand-blue-navy',
            'border border-brand-blue-navy'
        ]" :style="innerCircleStyle">
            <slot name="logo"></slot>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    size: {
        type: [String, Number],
        default: 175 // Dimensiunea totală a badge-ului: 175px
    },
    circularText1: {
        type: String,
        required: true
    },
    circularText2: {
        type: String,
        required: true
    },
    duration: {
        type: [String, Number],
        default: '10s' // Setat la 10s
    }
});

// Dimensiunea fixă a ViewBox-ului SVG pentru scalare
const svgSize = 300;
const center = svgSize / 2;

// Ajustăm razele pentru a fi pe aceeași linie și a lăsa mai puțin spațiu interior.
// Calculăm o singură rază de bază.
const baseTextRadius = center * 0.75; // Aproape de margine (0.96 din 150)

// Ambele texte folosesc aceeași cale pe aceeași rază
const textPathRadius = baseTextRadius;

// ID-uri unice (Rămân neschimbate)
const textPathId1 = 'circle-path-1';

// -----------------------------------------------------
// STYLING/LAYOUT CALCULATIONS
// -----------------------------------------------------

// Diametrul cercului interior (pentru logo). Reducem spațiul interior.
// Un diametru de 200px ar lăsa spațiu minim.
const innerLogoDiameterSvg = 200;

const innerCircleStyle = computed(() => {
    // Scalăm diametrul la dimensiunea reală (175)
    const diameterInPixels = (innerLogoDiameterSvg / svgSize) * props.size;
    return {
        width: `${diameterInPixels}px`,
        height: `${diameterInPixels}px`,
    };
});

// -----------------------------------------------------
// SVG PATH CALCULATIONS
// -----------------------------------------------------

// O singură cale, folosită pentru ambele texte (pentru a fi pe aceeași rază)
const circlePath = computed(() => {
    const startX = center;
    const startY = center - textPathRadius;
    // Desenăm cercul în sens orar
    return `M ${startX},${startY} A ${textPathRadius},${textPathRadius} 0 1 1 ${startX - 0.01},${startY}`;
});
</script>

<style scoped>
/* Folosim CSS doar pentru animația de rotație */

/* Fontul Bebas Neue (dacă nu e definit global) */
.font-bebas-neue {
    font-family: 'Bebas Neue', 'Anton', sans-serif;
    /* Ajustăm spațierea pentru a le face să se alinieze mai bine */
    letter-spacing: 2px;
}

/* Ambele folosesc aceeași animație (sens orar) și viteză */
.circular-text-1,
.circular-text-2 {
    animation: rotateTextClockwise linear infinite;
    transform-origin: 50% 50%;
}

/* Animație Sens Orar */
@keyframes rotateTextClockwise {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>