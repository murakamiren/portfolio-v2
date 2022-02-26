import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { VFC } from "react";

type worksItemProps = {
	ttl: string;
	desc: string;
	linkUrl: string;
};

const WorksItem: VFC<worksItemProps> = (props) => {
	return (
		<article>
			<a href={props.linkUrl} target="_blank" rel="noopener noreferrer">
				<Box w="full">
					<VStack justify="center" alignItems="center">
						<Heading as="h3" fontSize="2xl" fontWeight="semibold" fontFamily="Montserrat">
							{props.ttl}
						</Heading>
						<Box bgColor="tomato" />
						<Text>{props.desc}</Text>
					</VStack>
				</Box>
			</a>
		</article>
	);
};

export default WorksItem;
