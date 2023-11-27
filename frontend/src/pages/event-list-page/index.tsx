import EventCard from "./components/event-card"
import Header from "./components/header"
import NewEventButton from "./components/new-event-button"
import styled from "styled-components"


export type Athletes = {
    name: string,
    gender: 'Male' | 'Female',
    shirt: 'P' | 'M' | 'G' | 'GG'
} 

export type Event = {
    id: string,
    thumbnail: string,
    name: string,
    status: 'Em espera' | 'Em andamento' | 'Concluído',
    date: Date,
    categories: string[],
    scoreType: 'Por posição',
    athletes: Athletes[],
    workouts: object[],
    results: object[]
}
const EVENTS: Event[] =[{
    id: '1',
    thumbnail: 'murph.png',
    name: 'MURPH',
    status: 'Em andamento',
    date: new Date(),
    categories: ['RX'],
    scoreType: 'Por posição',
    athletes: [{name: 'João Victor Coelho', gender: 'Male', shirt: 'GG'}],
    workouts: [],
    results: []
},
{
    id: '2',
    thumbnail: 'summer.png',
    name: 'SUMMER CHALLENGE',
    status: 'Em espera',
    date: new Date(),
    categories: ['RX'],
    scoreType: 'Por posição',
    athletes: [{name: 'João Victor Coelho', gender: 'Male', shirt: 'GG'}],
    workouts: [],
    results: []
},
{
    id: '3',
    name: 'BXTRIATHLON',
    thumbnail: 'challenge.png',
    status: 'Concluído',
    date: new Date(),
    categories: ['RX'],
    scoreType: 'Por posição',
    athletes: [{name: 'João Victor Coelho', gender: 'Male', shirt: 'GG'}],
    workouts: [],
    results: []
}]

function EventListPage() {
    const gerarComponents = (e: Event) => <EventCard key={e.name} event={e} />
    return (
        <Wrapper>
            <Header />
            <main>
                <NewEventButton />
                <EventList>
                    {EVENTS.map(gerarComponents)}
                </EventList>
            </main>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 900px;
    margin: 0 auto;
    margin-bottom: 30px;
`
const EventList = styled.ul`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default EventListPage