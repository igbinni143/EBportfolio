import styled, { keyframes } from "styled-components";
import { TossColor } from "@/styles/defaultColors";
import React from "react";

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TextWrapper = styled.div`
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 10rem;
	font-weight: 800;
	letter-spacing: 200%;
	color: ${TossColor};
	animation: ${appear} 0.5s forwards;
	animation-delay: 0s;
`;

const AnimatedSpan = styled.span<{ delay: number }>`
	opacity: 0;
	animation: ${appear} 0.5s forwards;
	animation-delay: ${(props) => props.delay}s;
`;

interface LogoAnimationProps {
	children: string;
}

export default function LogoAnimation({ children }: LogoAnimationProps) {
	const text = children;
	const characters = text.split("");

	return (
		<TextWrapper>
			{characters.map((char, index) => (
				<AnimatedSpan key={index} delay={index * 0.1}>
					{char === " " ? "\u00A0" : char}
				</AnimatedSpan>
			))}
		</TextWrapper>
	);
}
