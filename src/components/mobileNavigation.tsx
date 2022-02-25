import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { VFC } from "react";

type mobileNavigationProps = {
	texts: string[];
};

const MobileNavigation: VFC<mobileNavigationProps> = (props) => {
	return (
		<Menu>
			<MenuButton as={IconButton} aria-label="navigation menu" icon={<HamburgerIcon />} />
			<MenuList>
				{props.texts.map((text, i) => (
					<MenuItem key={i}>{text}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default MobileNavigation;
