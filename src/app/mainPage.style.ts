import { slide } from "@/components/Arrow";
import { BodyTextColor } from "@/styles/defaultColors";
import styled from "styled-components";

export const ModalLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	justify-self: center;
	border: 1px solid #eee;
	border-radius: 16px;
	background: #fff;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
`;

export const BodyRow = styled.div`
	display: flex;
	align-items: center;
	justify-self: center;
	padding: 20rem 10rem;
	border-radius: 16px;
	overflow: hidden;
	width: 80vw;
`;

export const ImageContainer = styled.div`
	width: 100%;
	overflow: hidden;
`;
export const Contents = styled.div`
	padding: 12px 14px 16px;
	/*background-color: red;*/
	width: 80%;
`;
export const ThumbWrap = styled.div`
	position: relative;
	width: 100%;
`;
export const Title = styled.h3`
	font-size: 7rem;
	line-height: 1.4;
	margin: 0 0 6px;
`;

export const Desc = styled.div`
	font-size: 2rem;
	font-weight: 400;
	line-height: 140%;
	color: #666;
	margin: 0;
	align-items: center;

	a {
		font-size: 2rem;
		font-weight: 700;
		text-decoration: none;
		color: ${BodyTextColor};
	}
`;

export const ICONContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	animation: ${slide} 1.5s ease-in-out infinite;

	svg {
		transform: scale(2);
	}
`;

export const ExtraTitle = styled.div`
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 10rem;
	font-weight: 800;
	letter-spacing: 200%;
`;

export const Underline = styled.div`
	margin: 10px;
	padding: 5px 10px;
	border-bottom: 5px solid ${BodyTextColor};
	width: min-content;
`;
export const Box = styled.div`
	margin: 10px;
	padding: 4px;
	border: 3px solid ${BodyTextColor};
	aspect-ratio: 1/1;
	width: 80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background-color: #fff;
	overflow: hidden;
`;
export const BoxContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	justify-content: center;
	align-items: center;
`;

export const LastBodyRow = styled.div`
	display: flex;
	align-items: center;
	justify-self: center;

	border-radius: 16px;
	overflow: hidden;
	width: 80vw;
	height: 100vh;
`;
