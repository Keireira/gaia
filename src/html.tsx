import * as React from 'react'

export default ({ htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents }) => (
	<html lang="en-US" {...htmlAttributes}>
		<head>
			<meta charSet="utf-8"/>
			<meta httpEquiv="x-ua-compatible" content="IE=Edge"/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0"
			/>
			<title>Alena Dzhukich</title>
			{headComponents}
		</head>

		<body {...bodyAttributes}>
			{preBodyComponents}

			<div
				key="body"
				id="___gatsby"
				dangerouslySetInnerHTML={{ __html: body }}
			/>

			{postBodyComponents}
		</body>
	</html>
)
