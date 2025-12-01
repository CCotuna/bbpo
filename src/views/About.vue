<script setup>
import FAQTab from '@/components/home/FAQTab.vue'

const churchFaqs = [
    {
        question: "La ce oră au loc serviciile de duminică?",
        answer:
            "Serviciile principale au loc în fiecare duminică de la ora 10:00 dimineața. De asemenea, avem și o întâlnire de seară începând cu ora 17:00.",
    },
    {
        question: "Trebuie să fiu membru al bisericii pentru a participa?",
        answer:
            "Nu, oricine este binevenit! Indiferent dacă faci parte sau nu din biserică, poți participa la toate întâlnirile și evenimentele noastre.",
    },
    {
        question: "Cum pot deveni membru al bisericii?",
        answer:
            "Pentru a deveni membru, te poți înscrie la cursul introductiv de credință și apartenență, care are loc o dată pe lună. După finalizare, poți completa o cerere oficială de membru.",
    },
    {
        question: "Există posibilitatea de a face donații online?",
        answer:
            "Da, acceptăm donații online prin card bancar sau transfer direct. Toate detaliile se regăsesc pe pagina noastră de 'Donații'.",
    },
    {
        question: "Cum pot să mă implic în activitățile bisericii?",
        answer:
            "Poți alege să te alături uneia dintre echipele noastre de voluntari – muzică, media, copii, primire sau evenimente. Trimite-ne un mesaj și îți vom găsi locul potrivit!",
    },
    {
        question: "Unde se află biserica?",
        answer:
            "Ne găsești pe Strada Ciheiului nr. 40, Oradea. Parcarea este gratuită, iar stațiile de transport public sunt la 5 minute de mers pe jos.",
    },
];

</script>
<template>
    <div class="mt-20">
        <FAQTab subtitle="Întrebări frecvente" title="DESPRE BISERICA|PROVIDENTA"
            description="Dacă ești nou la biserica noastră sau vrei să te implici mai mult, aici găsești răspunsuri la cele mai frecvente întrebări despre slujbe, voluntariat și viața comunității."
            buttonText="VEZI TOATE ÎNTREBĂRILE" buttonLink="/about-page" :faqs="churchFaqs" />
    </div>
</template>
<style scoped></style>