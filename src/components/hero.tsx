import { Box, Button, Center, Divider, Flex, HStack, Icon, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { VFC } from "react";
import NavigationText from "./navigationText";
import { EmailIcon } from "@chakra-ui/icons";

const Hero: VFC = () => {
	return (
		<Box w="100vw" h="100vh" position="relative">
			<Flex flexDir="column" justifyContent="center" alignItems="center" w="full" h="full" position="relative">
				<VStack spacing={6}>
					<VStack spacing="-4">
						<Text fontFamily="Montserrat" fontSize={{ base: "sm", md: "md" }}>
							hello
						</Text>
						<Text fontSize={{ base: "4xl", md: "7xl" }} letterSpacing={1} fontWeight="semibold" fontFamily="Montserrat">
							Ren Murakami
						</Text>
						<Text fontFamily="Montserrat" fontSize={{ base: "sm", md: "md" }}>
							web front-end developer & design
						</Text>
					</VStack>
					<Center h="32px">
						<Divider orientation="vertical" borderColor={useColorModeValue("black", "white")} />
					</Center>
					<Center>
						<HStack spacing={8}>
							<a href="https://www.instagram.com/ren_m12/" target="_blank" rel="noopener noreferrer">
								<Icon as={AiOutlineInstagram} w={6} h={6} />
							</a>
							<a href="https://twitter.com/blxxmren" target="_blank" rel="noopener noreferrer">
								<Icon as={AiOutlineTwitter} w={6} h={6} />
							</a>
							<a href="https://github.com/murakamiren" target="_blank" rel="noopener noreferrer">
								<Icon as={AiOutlineGithub} w={6} h={6} />
							</a>
						</HStack>
					</Center>
				</VStack>
				<Button
					leftIcon={<EmailIcon />}
					position="absolute"
					bottom="0"
					left="50%"
					transform="translateX(-50%)"
					mb={20}
					size="lg"
				>
					<NavigationText text="contact me" linkUrl="/" />
				</Button>
			</Flex>
		</Box>
	);
};

export default Hero;
