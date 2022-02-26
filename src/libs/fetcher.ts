import { client } from "./client";

export const fetcher = async (endPoint: string) => {
	const data = await client.get({
		endpoint: endPoint,
	});

	return data.contents;
};
