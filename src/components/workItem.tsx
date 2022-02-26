import { Box, Heading, VStack, Text, Image } from "@chakra-ui/react";
import { useState, VFC } from "react";

type worksItemProps = {
	ttl: string;
	desc: string;
	img: string;
	linkUrl: string;
};

const WorksItem: VFC<worksItemProps> = (props) => {
	const [isHover, setIsHover] = useState(false);
	const handleOnHover = () => {
		setIsHover(true);
	};
	const handleOffHover = () => {
		setIsHover(false);
	};
	return (
		<article>
			<a href={props.linkUrl} target="_blank" rel="noopener noreferrer">
				<Box w="full">
					<VStack alignItems="center" spacing={8}>
						<Heading as="h3" fontSize="2xl" fontWeight="semibold" fontFamily="Montserrat">
							{props.ttl}
						</Heading>
						<Box
							w="full"
							h="300px"
							transition="filter 0.5s ease-out"
							onMouseOver={handleOnHover}
							onMouseLeave={handleOffHover}
							filter={isHover ? "brightness(90%)" : "brightness(65%)"}
						>
							<Image
								src={props.img}
								alt={"image of " + props.ttl}
								w="full"
								h="full"
								objectFit="contain"
								fallbackSrc="https://via.placeholder.com/600"
								loading="lazy"
							/>
						</Box>
						<Text>{props.desc}</Text>
					</VStack>
				</Box>
			</a>
		</article>
	);
};

export default WorksItem;
