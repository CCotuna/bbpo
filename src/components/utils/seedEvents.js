// src/utils/seedEvents.js
import { db } from '@/firebase/firebase.js'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export const seedEvents = async () => {
    try {
        const events = [
            {
                title: 'Cina Domnului',
                description: 'Ocazie specială de părtășie și reflecție spirituală.',
                image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?fm=jpg&q=60&w=3000',
                tags: ['Cina', 'Părtășie'],
                time: '17:00 - 18:30',
                location: 'Biserica Providența, Oradea',
                date: Timestamp.fromDate(new Date('2025-11-02'))
            },
            {
                title: 'Botez Nou Testamentar',
                description: 'Un moment de bucurie și celebrare a credinței noastre.',
                image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?fm=jpg&q=60&w=3000',
                tags: ['Botez', 'Mărturie'],
                time: '10:00 - 12:00',
                location: 'Biserica Providența, Oradea',
                date: Timestamp.fromDate(new Date('2025-11-09'))
            },
            {
                title: 'Seară de rugăciune',
                description: 'Timp de meditație și rugăciune colectivă.',
                image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=3000',
                tags: ['Rugăciune', 'Credință'],
                time: '19:00 - 21:00',
                location: 'Oradea',
                date: Timestamp.fromDate(new Date('2025-10-15'))
            },
            {
                title: 'Conferință de tineret',
                description: 'Conferință dedicată tinerilor din comunitatea noastră.',
                image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=3000',
                tags: ['Tineri', 'Conferință'],
                time: '10:00 - 16:00',
                location: 'Biserica Providența, Oradea',
                date: Timestamp.fromDate(new Date('2025-12-01'))
            },
            {
                title: 'Ziua Mulțumirii',
                description: 'O zi specială dedicată recunoștinței.',
                image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=3000',
                tags: ['Recunoștință', 'Sărbătoare'],
                time: '10:00 - 12:00',
                location: 'Oradea',
                date: Timestamp.fromDate(new Date('2025-10-19'))
            }
        ]

        const eventsRef = collection(db, 'events')

        for (const ev of events) {
            await addDoc(eventsRef, ev)
        }

        alert('Evenimente inserate cu succes!')
    } catch (error) {
        console.error('Eroare la inserare:', error)
        alert('A apărut o eroare!')
    }
}
