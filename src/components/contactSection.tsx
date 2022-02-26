import { Box, Divider, Heading, VStack, Text, useColorModeValue, HStack, Icon } from "@chakra-ui/react";
import { VFC } from "react";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

const ContactSection: VFC = () => {
	return (
		<section>
			<Box w="full" mt="120px">
				<VStack spacing={8}>
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
					<Text>email</Text>
					<Text>renmurakami1213@gmail.com</Text>
					<Text>social</Text>
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
			</Box>
		</section>
	);
};

export default ContactSection;
