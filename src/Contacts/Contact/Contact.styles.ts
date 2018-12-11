import styled from 'styled-components'

export default styled.a`
	font-family: 'Roboto', sans-serif;
	font-weight: 100;
	font-size: 10rem;
	line-height: 12rem;
	color: rgba(51, 51, 51, 0.5);

	cursor: pointer;
	transition: color 0.15s ease-in;

	&:hover {
		color: rgba(51, 51, 51, 1);
	}
`
