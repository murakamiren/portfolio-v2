import { Box, Center, Divider, Flex, HStack, Icon, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { VFC } from "react";

const Hero: VFC = () => {
	return (
		<Box w="100vw" h="100vh">
			<Flex justifyContent="center" alignItems="center" w="full" h="full">
				<VStack spacing={6}>
					<VStack spacing="-4">
						<Text>hello</Text>
						<Text fontSize={{ base: "5xl", md: "8xl" }} letterSpacing={2} fontWeight="semibold">
							Ren Murakami
						</Text>
						<Text>web front-end developer</Text>
					</VStack>
					<Center h="32px">
						<Divider orientation="vertical" borderColor={useColorModeValue("black", "white")} />
					</Center>
					<Center>
						<HStack spacing={8}>
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
								<Icon as={AiOutlineInstagram} w={6} h={6} />
							</a>
							<a href="https://twitter.com/blxxmren" target="_blank" rel="noopener noreferrer">
								<Icon as={AiOutlineTwitter} w={6} h={6} />
							</a>
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
								<Icon as={AiOutlineGithub} w={6} h={6} />
							</a>
						</HStack>
					</Center>
				</VStack>
			</Flex>
		</Box>
	);
};

export default Hero;
