import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCirclePlay, faCirclePause } from "@fortawesome/free-regular-svg-icons";

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  aspect-ratio: 1;
`;
export default Icon;

export function StatusIcon({status,}: {
  status: "Em espera" | "Em andamento" | "Concluído";
}) {
    const style = {marginLeft: "10px"}
  switch (status) {
    case "Em espera":
      return <Icon icon={faCirclePause} style={style}/>;
    case "Em andamento":
      return <Icon icon={faCirclePlay} style={style}/>;
    case "Concluído":
      return <Icon icon={faCircleCheck} color="var(--accent-color)" style={style}/>;
  }
}
