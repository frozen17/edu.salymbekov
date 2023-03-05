import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/typography";

export const StyledAccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vw;
  overflow: auto;
  margin: 8vw 0px;
`;

export const AccordionWrapper = styled.div`
  display: block;
  height: auto;
  background-color: ${colors.COLOR_WHITE};
  transition: all linear;
`;

export const AccordionTitle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 6vw 12vw;
  text-transform: uppercase;
  font-size: 10px;
  position: relative;
  letter-spacing: 0.15em;
  background-color: ${colors.COLOR_WHITE};
  border: none;
  border-bottom: 1px solid ${colors.COLOR_LIGHT_GREY};
  border-top: 1px solid ${colors.COLOR_LIGHT_GREY};
`;

export const AccordionItems = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ open }) => (open ? `4vw 12vw` : `0px`)};
  text-transform: uppercase;
  font-size: 8px;
  margin: 0;
  position: relative;
  letter-spacing: 0.15em;
`;

export const AccordionItem = styled.li`
  display: ${({ open }) => (open ? "block" : "none")};
  background-color: ${colors.COLOR_WHITE};
  padding: 6vw 12vw;
  width: 100%;
  font-size: ${fontSizes.fontS};

  &:last-of-type {
    margin-bottom: 2vw;
  }
`;

export const AccordionIcon = styled(FontAwesomeIcon)`
  font-size: 3vw;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;
