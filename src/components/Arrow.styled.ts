import { ICONContainer } from "@/app/mainPage.style";
import styled from "styled-components";

export const FadeContainer = styled(ICONContainer)<{ $isVisible: boolean }>`
	opacity: ${(props) => (props.$isVisible ? 1 : 0)};
	transition: opacity 0.5s ease-out;
`;
