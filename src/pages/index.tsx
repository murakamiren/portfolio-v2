import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/aboutMe";
import Hero from "../components/hero";
import Skills from "../components/skills";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Ren Murakami`s Portfolio</title>
				<meta name="description" content="ren murakami`s portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />
			<AboutMe />
			<Skills />
		</div>
	);
};

export default Home;
