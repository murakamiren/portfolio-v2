import { Box, Divider, Heading, HStack, Text, useColorModeValue, VStack, Icon } from "@chakra-ui/react";
import { VFC } from "react";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

const ContactSection: VFC = () => {
	return (
		<section>
			<Box w="full" mt="120px">
				<VStack spacing={12}>
					<Heading
						as="h2"
						fontWeight="semibold"
						fontSize={{ base: "sm", md: "md" }}
						fontFamily="Noto Sans JP"
						color={useColorModeValue("gray.400", "gray.600")}
					>
						04 - contact
					</Heading>
					<Divider orientation="horizontal" w={16} borderColor={useColorModeValue("black", "white")} />

					<Text fontSize={{ base: "4xl", md: "5xl" }} fontFamily="Montserrat" letterSpacing="normal">
						Contact me
					</Text>
					<VStack spacing={4}>
						<Heading
							as="h3"
							fontFamily="montserrat"
							fontWeight="medium"
							fontSize="sm"
							color={useColorModeValue("gray.700", "gray.300")}
						>
							email
						</Heading>
						<Divider orientation="vertical" h={8} borderColor={useColorModeValue("black", "white")} />
						<Text fontSize={{ base: "3xl", md: "5xl" }}>renmurakami1213@gmail.com</Text>
					</VStack>
					<VStack spacing={4}>
						<Heading
							as="h3"
							fontFamily="montserrat"
							fontWeight="medium"
							fontSize="sm"
							color={useColorModeValue("gray.700", "gray.300")}
						>
							social
						</Heading>
						<Divider orientation="vertical" h={8} borderColor={useColorModeValue("black", "white")} />
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
					</VStack>
				</VStack>
			</Box>
		</section>
	);
};

export default ContactSection;
