import {
	MainTextColor,
	BodyTextColor,
	TossColor,
} from "@/styles/defaultColors";
import styled from "styled-components";

export const ModalLayout = styled.div`
	width: 40vw;
	max-width: 500px;
	height: 10vh;
	min-height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 1rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 1rem 0;
	align-items: center;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
	position: relative;
	align-self: flex-start;
	margin-left: 1.3rem;
`;
export const Title = styled.h1`
	font-size: 1.2rem;
	font-weight: 700;
	color: ${MainTextColor};
`;

export const Subcontent = styled.p`
	font-size: 1rem;
	font-weight: 500;
	color: ${BodyTextColor};
`;

export const BackButton = styled.button`
	display: flex;
	color: ${TossColor};
	cursor: pointer;
	border: none;
	font-size: 1.1rem;
	font-weight: 500;
	align-self: flex-end;
	margin-right: 1rem;
	background-color: transparent;
`;
