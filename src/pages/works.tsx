import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import useSWR from "swr";
import WorksItem from "../components/workItem";
import { fetcher } from "../libs/fetcher";
import { worksContentType } from "../types/worksContentsType";

const Works: NextPage = () => {
	const { data, error } = useSWR<Array<worksContentType>>("works", fetcher);

	return (
		<div>
			<Head>
				<title>works</title>
				<meta name="description" content="my all works" />
			</Head>

			<section>
				<Box w="full">
					<Box w="full" h="50vh">
						<Flex h="full" justify="center" alignItems="center">
							<Heading as="h2" fontFamily="montserrat" fontWeight="semibold">
								My all works
							</Heading>
						</Flex>
					</Box>
					<Box mt="120px" px={{ base: 12, md: 32 }}>
						<Grid
							templateColumns="repeat(auto-fit, minmax(340px, 1fr))"
							gap={12}
							wordBreak="break-word"
							placeItems="center"
						>
							{!data ? (
								<Fragment>{error ? <Text>cant load data</Text> : <Text>loading...</Text>}</Fragment>
							) : (
								<Fragment>
									{data.map((d) => (
										<GridItem key={d.id}>
											<WorksItem ttl={d.ttl} desc={d.shortDesc} img={d.workImage.url} linkUrl={"/works/" + d.ttl} />
										</GridItem>
									))}
								</Fragment>
							)}
						</Grid>
					</Box>
				</Box>
			</section>
		</div>
	);
};

export default Works;
