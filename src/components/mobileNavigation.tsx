import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { VFC } from "react";
import { navigationInfoType } from "../types/navigationInfoType";
import NavigationText from "./navigationText";

type mobileNavigationProps = {
	infos: Array<navigationInfoType>;
};

const MobileNavigation: VFC<mobileNavigationProps> = (props) => {
	return (
		<Menu>
			<MenuButton as={IconButton} aria-label="navigation menu" icon={<HamburgerIcon />} />
			<MenuList>
				{props.infos.map((info, i) => (
					<MenuItem key={i}>
						<NavigationText text={info.text} linkUrl={info.linkUrl} />
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default MobileNavigation;
