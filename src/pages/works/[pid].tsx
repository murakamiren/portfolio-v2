import { Box, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const PostWorks: NextPage = () => {
	const router = useRouter();
	const { pid } = router.query;
	return (
		<Box w="full">
			<Flex h="50vh" justify="center" alignItems="center">
				<Heading as="h2" fontFamily="montserrat">
					work ttl: {pid}
				</Heading>
			</Flex>
		</Box>
	);
};

export default PostWorks;
