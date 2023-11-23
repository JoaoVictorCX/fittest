import EventCard from "./components/event-card"
import Header from "./components/header"
import NewEventButton from "./components/new-event-button"
import styled from "styled-components"

export type Event = {
    name: string,
    date: string
}
const EVENTS: Event[] =[{name: 'MURPH', date: '09/12/2023'}, {name: 'HAPPY HOUR', date: '10/12/2023'}]

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