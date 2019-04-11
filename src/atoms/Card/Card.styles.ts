import styled from 'styled-components'

export default styled.div`
	width: ${(props) => `calc(${props.width} * var(--grid-unit))`};
	height: ${(props) => `calc(${props.height} * var(--grid-unit))`};

	background-color: ${(props) => `var(--${props.color})`};
`
