import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Ren Murakami`s Portfolio</title>
				<meta name="description" content="ren murakami`s portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />
			<Box>
				<Text>hello world</Text>
			</Box>
		</div>
	);
};

export default Home;
