export type Person = {
	avatarUrl: string;
	name: string;
	email: string;
	interests: string;
	softskills: string;
	skills: string[];
};

export const person: Person = {
	avatarUrl: 'https://imgshare.io/images/2019/12/09/markPicture.th.png',
	name: 'Mark van der Laan',
	email: 'abc@gmail.com',
	interests:
		'Wide variety of interests, ranging from games, movies, music and design to nature walks, yoga, meditation & self-development.',
	softskills: 'Eye for detail, learns quickly, empathy & user-oriented',
	skills: [
		'HTML',
		'CSS',
		'JavaScript',
		'TypeScript',
		'React',
		'Express.js',
		'GraphQL',
		'SQL',
		'Java',
		'Python',
		'OutSystems',
	],
};

export type WorkExample = {
	title: string;
	url: string;
	cover: string;
	description: string;
	features?: {
		title: string;
		description: string;
		screenshot?: string;
		url: string;
	}[];
};

const exampleEnvestors = {
	title: 'Envestry',
	url: 'http://envestors.envestry-dev.com/',
	cover: 'https://miro.medium.com/max/1000/1*8PhF3sSsH6JHNU_ABPwhHQ.png',
	description:
		'Envestry is a secure online funding platform, a confidential space where sophisticated investors and high-growth businesses can connect, share information, secure deals and grow. I am helping them with a rebuild and am taking care of a lot of front-end components in TypeScript and recently also started with some back-end features in GraphQL. Next to their own funding platform, they also offer the same platform as white-label SaaS that can be tweaked in the admin panel.',
	features: [
		{
			title: 'Questions admin panel',
			description:
				'A tab in the admin panel to allow deal managers and companies to delete and answer questions from investors. I have done both the front-end and back-end work for the admin panel, monitor page (for investors to track their investments) and deal page (for investors to view all deal details).',
			screenshot:
				'https://imgshare.io/images/2019/12/09/envestryQuestionScreenshot.md.png',
			url: 'https://gist.github.com/mrkdoob/48e25bd5eb2a7d8f771b06d5faa93e4e',
		},
		{
			title: 'Documents admin panel',
			description:
				'A tab in the admin panel to allow deal managers and companies to upload, edit and delete important documents. I have done both the front-end and back-end work for the admin panel, monitor page (for investors to track their investments) and deal page (for investors to view all deal details).',
			screenshot:
				'https://imgshare.io/images/2019/12/09/envestryDocScreenshot.md.png',
			url: 'https://gist.github.com/mrkdoob/b71e62fa33a8344542f80614b5eaed19',
		},
	],
};

const exampleCommonGrounds = {
	title: 'Common Grounds',
	url: 'https://app.commongrounds.co/',
	cover: 'https://imgshare.io/images/2019/12/09/screenshotCG.md.png',
	description:
		'Common Grounds allows freelancers, entrepreneurs & start-ups to access the most interesting co-working spaces. I have helped them develop some front-end features such as: implementing a customer booking ticket design, designing and creating a bookings dashboard, synchronize bookings with Google calendar & a data visualisation dashboard.',
};

const exampleUXDesign = {
	title: 'Reconnect UX Design: a self-development course MVP (WIP)',
	url:
		'https://xd.adobe.com/view/ab3927f5-dd86-43cd-6379-0d733d4cd586-dd08/?fullscreen',
	cover: 'https://imgshare.io/images/2019/12/09/reconnectScreenshot.md.png',
	description:
		'Even though there are many self-development courses, books and content. Many people struggle with actually changing their behaviour and following the tips and strategies that self-development courses offer. Achieving behavioural change through the use of information technology is a difficult but very interesting challenge. \n The current MVP design is based on different theories and uses different phenomena and elements such as social contagion, pressure, and gamification to try to motivate the user to perform the tasks given to them in any given course.',
};

export const workExamples: WorkExample[] = [
	exampleEnvestors,
	exampleCommonGrounds,
	exampleUXDesign,
];
