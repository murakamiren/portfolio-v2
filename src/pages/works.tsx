import { Box, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";

const Works: NextPage = () => {
	return (
		<div>
			<Head>
				<title>works</title>
				<meta name="description" content="my all works" />
			</Head>

			<Box w="full">
				<Box w="full" h="50vh">
					<Flex h="full" justify="center" alignItems="center">
						<Heading as="h2" fontFamily="montserrat">
							My all works
						</Heading>
					</Flex>
				</Box>
			</Box>
		</div>
	);
};

export default Works;
