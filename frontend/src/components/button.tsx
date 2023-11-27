import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type Props = {
  type?: "primary" | "secundary" | "tertiary";
};

function Button(props: PropsWithChildren<Props>) {
  const { children, type = "primary" } = props;

  return (
    <Wrapper type={type}>
      {children}
    </Wrapper>
  );
}

function getStyleFor(props: Props) {
  switch (props.type) {
    case "primary":
      return css`
        background-color: var(--dimmed-accent-color);
        outline: 1px solid var(--accent-color);
        color: var(--accent-color);
        &:hover {
          background-color: var(--accent-color);
          color: var(--dimmed-accent-color);
        }
      `;
    case "secundary":
      return css`
        outline: 1px solid var(--dimmed-txt-color);
        color: var(--dimmed-txt-color);
        &:hover {
          color: white;
          background-color: var(--layout-color);
        }
      `;
    case "tertiary":
      return css`
        color: var(--dimmed-txt-color);
        &:hover {
          color: white;
          background-color: var(--layout-color);
        }
      `;
    default:
      return "";
  }
}

const Wrapper = styled.button<Props>`
  border-radius: 10px;
  padding-block: 10px;
  padding-inline: 12px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: 300ms;
  ${(props) => getStyleFor(props)}
`;

export default Button;
