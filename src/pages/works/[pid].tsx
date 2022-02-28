import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
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
				<Text>{work.ttl}</Text>
				<Text>{work.shortDesc}</Text>
				<Text>{work.desc}</Text>
				<Text>{work.when}</Text>
				{work.techStack.map((d) => (
					<Text key={d}>{d}</Text>
				))}
				{work.isGroup && <Text>この作品はチーム制作です</Text>}
				<Link href={work.linkUrl} rel="noreferrer noopener" target="_blank">
					{work.ttl}のサイトはこちら
				</Link>
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
