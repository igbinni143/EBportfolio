import React, { useState } from "react";
import DropDownIcon from "../../public/asset/dropdown.svg";
import { ICONContainer } from "@/app/mainPage.style";
import { keyframes } from "styled-components";

export const slide = keyframes`
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const Arrow = () => {
	const [isVisible, setIsVisible] = useState(true);

	const handleClick = () => {
		setIsVisible(false);

		// 1단계: profile-section으로 스크롤
		const profileSection = document.getElementById("profile-section");
		profileSection?.scrollIntoView({ behavior: "smooth" });

		// 2단계: 2초 후 description-section으로 스크롤
		setTimeout(() => {
			const descriptionSection = document.getElementById("description-section");
			descriptionSection?.scrollIntoView({ behavior: "smooth" });
		}, 2000);
	};

	if (!isVisible) return null;

	return (
		<ICONContainer onClick={handleClick}>
			<DropDownIcon width={60} height={60} />
		</ICONContainer>
	);
};

export default Arrow;
