import { Box, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

const PostWorks: NextPage = () => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<Fragment>
			<Head>
				<title>work: {pid}</title>
			</Head>

			<Box w="full">
				<Flex h="50vh" justify="center" alignItems="center">
					<Heading as="h2" fontFamily="montserrat">
						work ttl: {pid}
					</Heading>
				</Flex>
			</Box>
		</Fragment>
	);
};

export default PostWorks;
