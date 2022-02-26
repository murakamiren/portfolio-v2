import { Box, Divider, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { VFC } from "react";

const Skills: VFC = () => {
	return (
		<section>
			<Box w="full" mt="120px">
				<Flex flexDir="column" alignItems="flex-end" px={{ base: 12, md: 32 }}>
					<Stack spacing={8} w={{ base: "full", md: "65%", xl: "60%" }} textAlign="end">
						<Heading
							as="h2"
							fontWeight="semibold"
							fontSize={{ base: "sm", md: "md" }}
							fontFamily="Montserrat"
							color={useColorModeValue("gray.400", "gray.600")}
						>
							02 - Skills
						</Heading>
						<Stack spacing={8}>
							<Text fontSize={{ base: "4xl", md: "5xl" }} fontFamily="Montserrat" letterSpacing="normal">
								What I use & am learning{" "}
							</Text>
							<Flex justifyContent="flex-end">
								<Divider orientation="horizontal" w={16} borderColor={useColorModeValue("black", "white")} />
							</Flex>
							<section>
								<Stack spacing={4}>
									<Heading as="h3" fontSize="sm" color={useColorModeValue("gray.700", "gray.300")} fontWeight="md">
										メインで使用する技術
									</Heading>
								</Stack>
							</section>
						</Stack>
					</Stack>
				</Flex>
			</Box>
		</section>
	);
};

export default Skills;
