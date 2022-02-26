import { Box, Divider, Heading, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { VFC } from "react";

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
				</VStack>
			</Box>
		</section>
	);
};

export default ContactSection;
