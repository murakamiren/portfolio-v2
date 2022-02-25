import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import { VFC } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNavigation from "../mobileNavigation";
import NavigationText from "../navigationText";
import ToggleColorModeBtn from "../toggleColorModeBtn";

const Header: VFC = () => {
	const windowSize = useWindowSize();
	const navInnerText: string[] = ["home", "works", "contact"];

	return (
		<header>
			<Container maxW="container.xl" top="0">
				<nav>
					<Flex justifyContent="space-between" alignItems="center" h="8vh">
						<Heading as="h1">Rm</Heading>
						<HStack spacing={windowSize.width > 1024 ? 8 : 4}>
							{windowSize.width > 1024 ? (
								<HStack spacing={4}>
									{navInnerText.map((t, i) => (
										<NavigationText text={t} key={i} />
									))}
								</HStack>
							) : (
								<MobileNavigation texts={navInnerText} />
							)}
							<ToggleColorModeBtn />
						</HStack>
					</Flex>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
