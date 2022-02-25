import { Link } from "@chakra-ui/react";
import { VFC } from "react";
import NextLink from "next/link";

type navigationTextProps = {
	text: string;
};

const NavigationText: VFC<navigationTextProps> = (props) => {
	return (
		<NextLink href="/" passHref>
			<Link>{props.text}</Link>
		</NextLink>
	);
};

export default NavigationText;
