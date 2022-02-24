import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	useSystemColorMode: true,
	initialColorMode: "light",
};

const theme = extendTheme({ config });

export default theme;
