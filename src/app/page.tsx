//"use client";
//import Image from "next/image";
//import {
//	BodyRow,
//	ThumbWrap,
//	Contents,
//	ImageContainer,
//	Desc,
//	Title,
//	ModalLayout,
//	Box,
//	Underline,
//	BoxContainer,
//} from "./mainPage.style";
//import ExtratitleComopnent from "@/components/ExtratitleComopnent";
//import Arrow from "@/components/Arrow";
//import Description from "@/components/Description";
//import JSLOGO from "../../public/asset/jscriptlogo.svg";
//import TSLOGO from "../../public/asset/tscriptlogo.png";
//import NEXTLOGO from "../../public/asset/nextjs-icon.svg";
//import ReactLOGO from "../../public/asset/Python-logo.svg";
//import PythonLOGO from "../../public/asset/React-icon.svg";

//export default function Home() {
//	return (
//		<ModalLayout>
//			<ExtratitleComopnent />
//			<Arrow />

//			<BodyRow>
//				<ThumbWrap>
//					<ImageContainer>
//						<Image
//							src="/asset/eunbin.jpg"
//							alt="고은빈"
//							width={350}
//							height={450}
//							style={{ borderRadius: "10px" }}
//						/>
//					</ImageContainer>
//				</ThumbWrap>

//				<Contents>
//					<Title>Eunbin Ko</Title>
//					<Desc>
//						<Underline>
//							<a href="https://github.com/igbinni143">GITHUB</a>
//						</Underline>

//						<BoxContainer>
//							<Box
//								style={{ overflow: "hidden", width: "80px", height: "80px" }}
//							>
//								<JSLOGO style={{ width: "80px", height: "80px" }} />
//							</Box>
//							<Box
//								style={{ overflow: "hidden", width: "80px", height: "80px" }}
//							>
//								<Image
//									src="/asset/tscriptlogo.png"
//									alt="typescript"
//									width={80}
//									height={80}
//									style={{ borderRadius: "10px" }}
//								/>{" "}
//							</Box>
//							<Box
//								style={{ overflow: "hidden", width: "80px", height: "80px" }}
//							>
//								<NEXTLOGO style={{ width: "80px", height: "80px" }} />
//							</Box>
//							<Box
//								style={{ overflow: "hidden", width: "80px", height: "80px" }}
//							>
//								<ReactLOGO style={{ width: "80px", height: "80px" }} />
//							</Box>
//							<Box
//								style={{ overflow: "hidden", width: "80px", height: "80px" }}
//							>
//								<PythonLOGO />
//							</Box>
//						</BoxContainer>
//					</Desc>
//				</Contents>
//			</BodyRow>

//			<BodyRow>
//				<Description />
//			</BodyRow>
//		</ModalLayout>
//	);
//}

"use client";
import Image from "next/image";
import {
	BodyRow,
	ThumbWrap,
	Contents,
	ImageContainer,
	Desc,
	Title,
	ModalLayout,
	Box,
	Underline,
	BoxContainer,
	LastBodyRow,
} from "./mainPage.style";
import ExtratitleComopnent from "@/components/ExtratitleComopnent";
import Arrow from "@/components/Arrow";
import Description from "@/components/Description";
import JSLOGO from "../../public/asset/jscriptlogo.svg";
import TSLOGO from "../../public/asset/tscriptlogo.png";
import NEXTLOGO from "../../public/asset/nextjs-icon.svg";
import ReactLOGO from "../../public/asset/Python-logo.svg";
import PythonLOGO from "../../public/asset/React-icon.svg";

export default function Home() {
	return (
		<ModalLayout>
			<ExtratitleComopnent />
			<Arrow />

			<BodyRow id="profile-section">
				<ThumbWrap>
					<ImageContainer>
						<Image
							src="/asset/eunbin.jpg"
							alt="고은빈"
							width={350}
							height={450}
							style={{ borderRadius: "10px" }}
						/>
					</ImageContainer>
				</ThumbWrap>

				<Contents>
					<Title>Eunbin Ko</Title>
					<Desc>
						<Underline>
							<a href="https://github.com/igbinni143">GITHUB</a>
						</Underline>

						<BoxContainer>
							<Box
								style={{ overflow: "hidden", width: "80px", height: "80px" }}
							>
								<JSLOGO style={{ width: "80px", height: "80px" }} />
							</Box>
							<Box
								style={{ overflow: "hidden", width: "80px", height: "80px" }}
							>
								<Image
									src="/asset/tscriptlogo.png"
									alt="typescript"
									width={80}
									height={80}
									style={{ borderRadius: "10px" }}
								/>
							</Box>
							<Box
								style={{ overflow: "hidden", width: "80px", height: "80px" }}
							>
								<NEXTLOGO style={{ width: "80px", height: "80px" }} />
							</Box>
							<Box
								style={{ overflow: "hidden", width: "80px", height: "80px" }}
							>
								<ReactLOGO style={{ width: "80px", height: "80px" }} />
							</Box>
							<Box
								style={{ overflow: "hidden", width: "80px", height: "80px" }}
							>
								<PythonLOGO />
							</Box>
						</BoxContainer>
					</Desc>
				</Contents>
			</BodyRow>

			<LastBodyRow id="description-section">
				<Description />
			</LastBodyRow>
		</ModalLayout>
	);
}
