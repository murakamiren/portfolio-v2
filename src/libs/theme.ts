import { ComponentStyleConfig, extendTheme, type ThemeConfig } from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: "light",
	},
};

const config: ThemeConfig = {
	useSystemColorMode: true,
	initialColorMode: "light",
};

const theme = extendTheme({ components: { Text }, config });

export default theme;
