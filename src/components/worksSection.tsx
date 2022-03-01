import {
	Box,
	Button,
	Center,
	Divider,
	Grid,
	GridItem,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Fragment, VFC } from "react";
import useSWR from "swr";
import { fetcher } from "../libs/fetcher";
import { worksContentType } from "../types/worksContentsType";
import NavigationText from "./navigationText";
import WorksItem from "./workItem";

const WorksSection: VFC = () => {
	const { data, error } = useSWR<Array<worksContentType>>("works", fetcher);

	return (
		<section>
			<Box w="full" mt="120px">
				<Stack spacing={8} px={{ base: 12, md: 32 }}>
					<Heading
						as="h2"
						fontWeight="semibold"
						fontSize={{ base: "sm", md: "md" }}
						fontFamily="Montserrat"
						color={useColorModeValue("gray.400", "gray.600")}
					>
						03 - works
					</Heading>
					<Text fontSize={{ base: "4xl", md: "5xl" }} fontFamily="Montserrat" letterSpacing="normal" fontWeight="md">
						My recent works
					</Text>
					<Divider orientation="horizontal" w={16} borderColor={useColorModeValue("black", "white")} />
					<Stack spacing={24}>
						<Grid
							templateColumns="repeat(auto-fit, minmax(340px, 1fr))"
							gap={8}
							wordBreak="break-word"
							placeItems="center"
						>
							{data ? (
								<Fragment>
									{data
										.filter((d, i) => i <= data.length - 2)
										.map((latestData) => (
											<GridItem key={latestData.createdAt}>
												<WorksItem
													ttl={latestData.ttl}
													desc={latestData.shortDesc}
													img={latestData.workImage.url}
													linkUrl={"/works/" + latestData.ttl}
												/>
											</GridItem>
										))}
								</Fragment>
							) : (
								<Fragment>{error ? <Text>cant load data</Text> : <Text>loading...</Text>}</Fragment>
							)}
						</Grid>
						<Center>
							<Button size="md">
								<NavigationText text="more works" linkUrl="/works" />
							</Button>
						</Center>
					</Stack>
				</Stack>
			</Box>
		</section>
	);
};

export default WorksSection;
