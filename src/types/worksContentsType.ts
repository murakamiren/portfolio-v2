export type worksContentType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	ttl: string;
	shortDesc: string;
	desc: string;
	workImage: {
		url: string;
		height: number;
		width: number;
	};
	techStack: string[];
	isGroup: boolean;
	linkUrl: string;
	when: string;
};
