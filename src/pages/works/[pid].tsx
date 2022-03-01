import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	List,
	ListItem,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { Fragment } from "react";
import { client } from "../../libs/client";
import { worksContentType } from "../../types/worksContentsType";

type pathParamsType = {
	pid: string;
} & ParsedUrlQuery;

type postPropsType = {
	work: worksContentType;
};

const PostWorks: NextPage<postPropsType> = ({ work }) => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<Fragment>
			<Head>
				<title>work: {pid}</title>
			</Head>

			<Box w="full" px={{ base: 12, md: 32 }}>
				<Flex h="50vh" justify="center" alignItems="center">
					<Heading as="h2" fontFamily="montserrat">
						work ttl: {pid}
					</Heading>
				</Flex>
				<Flex
					flexDir={{ base: "column-reverse", lg: "row" }}
					wrap="nowrap"
					justify="space-between"
					alignItems="center"
					gap={8}
				>
					<VStack spacing={8} justify="flex-start" alignItems="flex-start" flex="1 0 50%">
						<Heading as="h3" fontFamily="montserrat" fontWeight="semibold">
							{work.ttl}
						</Heading>
						<Divider orientation="horizontal" w={16} borderColor={useColorModeValue("black", "white")} />
						<Text>{work.shortDesc}</Text>
						<Text>{work.desc}</Text>
						<Text>制作時期: {work.when}</Text>
						<VStack spacing={2} justify="flex-start" alignItems="flex-start">
							<Heading as="h4" fontFamily="montserrat" fontWeight="semibold" fontSize="xl">
								使用技術:
							</Heading>
							<List>
								{work.techStack.map((d) => (
									<ListItem key={d}>
										<Text>{d}</Text>
									</ListItem>
								))}
							</List>
						</VStack>
						{work.isGroup && <Text>この作品はチーム制作です</Text>}
						<Link href={work.linkUrl} rel="noreferrer noopener" target="_blank" isExternal>
							{work.ttl}のサイトはこちら
							<ExternalLinkIcon mx="2px" />
						</Link>
					</VStack>
					<Box flex="1 2 50%" h="520px">
						<Image src={work.workImage.url} alt={"image of " + work.ttl} w="full" h="full" objectFit="contain" />
					</Box>
				</Flex>
			</Box>
		</Fragment>
	);
};

export const getStaticPaths: GetStaticPaths<pathParamsType> = async () => {
	const data = await client.get({
		endpoint: "works",
	});

	const postData: worksContentType[] = data.contents;

	const paths = postData.map((d) => ({
		params: {
			pid: d.ttl,
		},
	}));
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<postPropsType, pathParamsType> = async (context) => {
	const { pid } = context.params as pathParamsType;

	const data = await client.get({
		endpoint: "works",
	});

	const postData: worksContentType[] = data.contents;

	const finalPostData = postData.filter((d) => d.ttl === pid);
	const work = finalPostData[0];

	return {
		props: { work },
	};
};

export default PostWorks;
