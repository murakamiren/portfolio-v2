import { css, Global } from "@emotion/react";
import { VFC } from "react";

const Fonts: VFC = () => {
	return (
		<Global
			styles={css`
				body {
					font-family: "Noto Sans JP", "Roboto", sans-serif;
				}
			`}
		/>
	);
};

export default Fonts;
