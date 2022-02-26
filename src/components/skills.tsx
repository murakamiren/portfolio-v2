import {
	Box,
	Divider,
	Flex,
	Heading,
	HStack,
	Icon,
	List,
	ListItem,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { VFC } from "react";
import { IconType } from "react-icons/lib";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiSass,
	SiPug,
	SiNpm,
	SiVuedotjs,
	SiVite,
	SiFlutter,
	SiFirebase,
	SiNodedotjs,
	SiTailwindcss,
	SiChakraui,
	SiGraphql,
	SiPrisma,
	SiMysql,
	SiSupabase,
} from "react-icons/si";

const Skills: VFC = () => {
	const iconUsingTechs: IconType[] = [
		SiHtml5,
		SiPug,
		SiCss3,
		SiSass,
		SiTailwindcss,
		SiJavascript,
		SiTypescript,
		SiReact,
		SiChakraui,
		SiVuedotjs,
		SiNpm,
		SiVite,
	];

	const iconLearning: IconType[] = [
		SiNodedotjs,
		SiGraphql,
		SiPrisma,
		SiMysql,
		SiNextdotjs,
		SiFlutter,
		SiFirebase,
		SiSupabase,
	];

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
								<Stack spacing={6}>
									<Heading as="h3" fontSize="sm" color={useColorModeValue("gray.700", "gray.300")} fontWeight="md">
										メインで使用する技術
									</Heading>
									<List>
										<HStack justify="end" spacing={6}>
											{iconUsingTechs.map((icon, i) => (
												<ListItem key={i}>
													<Icon as={icon} w={6} h={6} />
												</ListItem>
											))}
										</HStack>
									</List>
								</Stack>
							</section>
							<section>
								<Stack spacing={6}>
									<Heading as="h3" fontSize="sm" color={useColorModeValue("gray.700", "gray.300")} fontWeight="md">
										現在学んでいる(学びたい)、試している技術
									</Heading>
									<List>
										<HStack justify="end" spacing={6}>
											{iconLearning.map((icon, i) => (
												<ListItem key={i}>
													<Icon as={icon} w={6} h={6} />
												</ListItem>
											))}
										</HStack>
									</List>
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
