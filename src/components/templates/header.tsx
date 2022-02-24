import { Flex, Heading, Text } from "@chakra-ui/react";
import { VFC } from "react";
import ToggleColorModeBtn from "../toggleColorModeBtn";

const Header: VFC = () => {
	return (
		<header>
			<Flex justifyContent="space-between" alignItems="center" px={16} h="100">
				<Heading as="h1">hello world</Heading>
				<ToggleColorModeBtn />
			</Flex>
		</header>
	);
};

export default Header;
