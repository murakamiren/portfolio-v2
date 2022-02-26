import { Link } from "@chakra-ui/react";
import { VFC } from "react";
import NextLink from "next/link";

type navigationTextProps = {
	text: string;
	linkUrl: string;
};

const NavigationText: VFC<navigationTextProps> = (props) => {
	return (
		<NextLink href={props.linkUrl} passHref>
			<Link w="full" fontFamily="Montserrat">
				{props.text}
			</Link>
		</NextLink>
	);
};

export default NavigationText;
