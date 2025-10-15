import React from "react";
import {
	BackButton,
	ModalLayout,
	Title,
	Subcontent,
	Content,
} from "./ErrorModal.styled";

const ErrorModal = () => {
	return (
		<ModalLayout>
			<Content>
				<Title>해당 페이지에 문제가 생겼어요.</Title>
				<Subcontent> 오류가 발생했어요. 전 페이지로 돌아가주세요</Subcontent>
			</Content>
			<BackButton>뒤로 돌아가기</BackButton>
		</ModalLayout>
	);
};

export default ErrorModal;
