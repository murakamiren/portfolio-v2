import { Box, Divider, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { VFC } from "react";

const AboutMe: VFC = () => {
	return (
		<section>
			<Box w="full" mt="120px">
				<Stack spacing={8}>
					<Stack spacing={8} px={{ base: 12, md: 32 }}>
						<Heading
							as="h2"
							fontWeight="semibold"
							fontSize={{ base: "sm", md: "md" }}
							fontFamily="Noto Sans JP"
							color={useColorModeValue("gray.400", "gray.600")}
						>
							01 - ABOUT ME
						</Heading>
					</Stack>
					<Stack spacing={8} px={{ base: 12, md: 32 }}>
						<Stack spacing={1}>
							<Text fontSize={{ base: "4xl", md: "5xl" }} fontFamily="Montserrat" letterSpacing="widest">
								村上 蓮
							</Text>
							<Text fontSize="sm" color={useColorModeValue("gray.700", "gray.300")}>
								ECCコンピュータ専門学校 Webデザインコース
								<br />
								24年卒
							</Text>
						</Stack>
						<Divider orientation="horizontal" w={16} borderColor={useColorModeValue("black", "white")} />
						<Box w={{ base: "full", md: "65%", xl: "60%" }}>
							<Text textAlign="justify" lineHeight="7">
								ようこそ、私のポートフォリオへ。
								<br />
								私の名前は村上 蓮で、現在ECCコンピューター専門学校のWebデザインコースにてwebの事について勉強していて、
								特に、私はフロントエンドの技術について興味がありその技術を特に力を入れて勉強しており、従来からwebを支えているような技術は勿論、モダンな物もどんどん取り入れていきたいと思っています。
								<br />
								また、バックエンドにも興味があり、時間があればバックエンドについても学習したいと思っており、それらの技術を使いこなせるようになりフルスタックなスキルを身につけたいと思っています。
							</Text>
						</Box>
					</Stack>
				</Stack>
			</Box>
		</section>
	);
};

export default AboutMe;
