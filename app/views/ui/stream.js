import React from 'react';
import styled, { css } from 'styled-components';

export const StreamContainer = styled.div`
	display: inline-block;
	width: calc(100% - 20px);
	overflow: hidden;
	vertical-align: middle;
`;
export const AllStreams = styled.div`
	display: inline;
	& > .active {
		background: #e4144f;
		text-decoration: none;
	}
	& > a {
		display: inline-block;
		text-align: center;
		white-space: nowrap;
		text-decoration: none;
		cursor: pointer;
		color: white;
		min-width: max-content;
		min-height: max-content;
		padding: 2px 10px;
		margin-right: 5px;
		background: #1f1f1f;
		margin-bottom: 5px;
		&:last-child {
			margin-right: 0;
		}
		& > img {
			vertical-align: text-top;
			width: 16px;
			margin-right: 4px;
		}
	}
`;

export const StreamBody = styled.div`
	border: 3px solid #1e1e1e;
	border-bottom: '';
	& > img {
		padding: 2% 15%;
	}
`;

export const StreamHeadContainer = styled.div`
	border-bottom: ${props => (props.showStream ? '3px solid #1e1e1e' : '')};
	padding: 10px;
	color: white;
	position: relative;
`;
