import React from "react";
import styled from "styled-components";
import DescAnimation from "./animation/Descanimation";

const Description = () => {
	const DescriptionContainer = styled.div`
		top: 0;
		width: 80vw;
		font-size: 7rem;
		font-weight: 800;
	`;

	return (
		<DescriptionContainer>
			<div style={{ display: "flex", alignItems: "center" }}>
				<DescAnimation>Toss </DescAnimation> 에게
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<DescAnimation>Toss </DescAnimation> 하고 싶은 개발자
			</div>
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				고은빈입니다.
			</div>
		</DescriptionContainer>
	);
};

export default Description;
