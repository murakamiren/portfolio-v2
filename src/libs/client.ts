import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "2fjqkhu07j",
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
