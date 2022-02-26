import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	HStack,
	Icon,
	Spacer,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { VFC } from "react";
import NavigationText from "./navigationText";
import { EmailIcon } from "@chakra-ui/icons";

const Hero: VFC = () => {
	return (
		<Box w="100vw" h="100vh" position="relative">
			<Flex flexDir="column" justifyContent="center" alignItems="center" w="full" h="full">
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
			<Button leftIcon={<EmailIcon />} position="absolute" bottom="0" left="0" right="0" mx="auto" mb={20} size="md">
				<NavigationText text="contact me" linkUrl="/" />
			</Button>
		</Box>
	);
};

export default Hero;
