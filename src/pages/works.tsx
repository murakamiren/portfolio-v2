import { Box, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const Works: NextPage = () => {
	return (
		<Box w="full">
			<Box w="full" h="50vh">
				<Flex h="full" justify="center" alignItems="center">
					<Heading as="h2" fontFamily="montserrat">
						My all works
					</Heading>
				</Flex>
			</Box>
		</Box>
	);
};

export default Works;
