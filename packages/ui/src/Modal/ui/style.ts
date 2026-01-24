import { colors } from "@bds-web/colors";
import { shapes } from "@bds-web/shapes";
import { typoCss } from "@bds-web/typography";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { CloseIcon } from "../../CloseIcon";


const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const slideUp = keyframes`
	from { opacity: 0; transform: translateY(20px); }
	to { opacity: 1; transform: translateY(0); }
`;

export const Overlay = styled.div<{ $zIndex: number }>`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: ${({ $zIndex }) => $zIndex};
	animation: ${fadeIn} 300ms ease-out;
`;

export const Modal = styled.div`
	position: relative;
	background: ${colors.static.white};
	border-radius: ${shapes.large};
	padding: 20px;
	max-height: 90vh;
	overflow-y: auto;
	animation: ${slideUp} 300ms ease-out;

	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.3);
	}
`;

export const ModalHeader = styled.div`
	min-width: 240px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;

export const ModalTitle = styled.h2`
	${typoCss("Accent")};
	color: ${colors.static.black};
	margin: 0;
`;