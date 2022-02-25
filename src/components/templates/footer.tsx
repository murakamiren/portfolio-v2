import { Box, Flex, Text } from "@chakra-ui/react";
import { VFC } from "react";

const Footer: VFC = () => {
	return (
		<footer>
			<Box w="100vw" h="80px">
				<Flex w="full" h="full" justifyContent="center" alignItems="center">
					<Text>
						<small>&copy;Ren Murakami`s Portfolio</small>
					</Text>
				</Flex>
			</Box>
		</footer>
	);
};

export default Footer;
