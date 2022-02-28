import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import { VFC } from "react";
import NextLink from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNavigation from "../mobileNavigation";
import NavigationText from "../navigationText";
import ToggleColorModeBtn from "../toggleColorModeBtn";
import { navigationInfoType } from "../../types/navigationInfoType";

const Header: VFC = () => {
	const windowSize = useWindowSize();
	const navInfos: Array<navigationInfoType> = [
		{
			text: "home",
			linkUrl: "/",
		},
		{
			text: "works",
			linkUrl: "/works",
		},
		{
			text: "contact",
			linkUrl: "/",
		},
	];

	return (
		<header>
			<Flex w="100vw" justifyContent="center">
				<Container maxW="container.xl" position="absolute" top="0" zIndex="1">
					<nav>
						<Flex justifyContent="space-between" alignItems="center" h="8vh">
							<NextLink href="/" passHref>
								<Heading as="h1" fontFamily="Montserrat" fontSize="2xl" fontWeight="medium" cursor="pointer">
									Rm
								</Heading>
							</NextLink>
							<HStack spacing={windowSize.width > 1024 ? 12 : 4}>
								{windowSize.width > 1024 ? (
									<HStack spacing={12}>
										{navInfos.map((info, i) => (
											<NavigationText text={info.text} linkUrl={info.linkUrl} key={i} />
										))}
									</HStack>
								) : (
									<MobileNavigation infos={navInfos} />
								)}
								<ToggleColorModeBtn />
							</HStack>
						</Flex>
					</nav>
				</Container>
			</Flex>
		</header>
	);
};

export default Header;
