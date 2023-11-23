import styled from "styled-components"
import { Event } from ".."
type Props = { event: Event}

function EventCard (props: Props){
    const {name, date} = props.event
    return (
        <Wrapper>
            <Thumbnail src="./challenge.png" alt="" />
            <Content>
            <h2>{name}</h2>
            <p>{date}</p>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.li`
    display: flex;
    gap: 10px;
`
const Thumbnail = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 20px;
`

const Content = styled.main`
    padding: 20px;
    background-color: var(--dimmed-bg-color);
    border-radius: 20px;
    flex-grow: 1;
`

export default EventCard