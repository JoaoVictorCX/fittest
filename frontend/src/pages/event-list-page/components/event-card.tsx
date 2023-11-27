import styled from "styled-components";
import { Event } from "..";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Icon, { StatusIcon } from "../../../components/icon";
import Button from "../../../components/button";
type Props = { event: Event };

function EventCard(props: Props) {
  const { name, thumbnail, status, date, athletes } = props.event;
  return (
    <Wrapper>
      <Thumbnail src={`./${thumbnail}`} alt="" />
      <Content>
        <ContentHeader>
          <h2>{name}</h2>
          <p>
            {status}
            <StatusIcon status={status} />
          </p>
        </ContentHeader>
        <ContentBody>
          <p>
            <Icon icon={faCalendar} />
            {date.toLocaleDateString()}
          </p>
          <p>
            <Icon icon={faUser} />
            {athletes.length}/100
          </p>
        </ContentBody>
        <ContentFooter>
          <Button type="secundary">Resultados</Button>
          <Button>Leaderboard</Button>
        </ContentFooter>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  gap: 10px;
`;
const Thumbnail = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 20px;
`;

const Content = styled.main`
  padding: 20px;
  background-color: var(--dimmed-bg-color);
  border-radius: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ContentBody = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 20px;
  color: var(--dimmed-txt-color);
`;

const ContentFooter = styled.div`
  display: flex;
  gap: 12px;
  justify-content: end;
`;

export default EventCard;
