import reconnectScreen from '../assets/screenshots/reconnectScreenshot.png';
import envestryScreen from '../assets/screenshots/envestryscreenshot.png';
import screenshotCG from '../assets/screenshots/screenShotCG.png';
import ticketScreenshot from '../assets/screenshots/ticketScreenshot.png';

export type Person = {
	name: string;
	address: string;
	phoneNumber: string;
	email: string;
	birthdateText: string;
	interests: string;
	softskills: string;
	skills: string[];
	// jobs: ;
};

export const person: Person = {
	name: 'Mark van der Laan',
	address: 'abchof 123, 1333AA Almere',
	phoneNumber: '06-abcd',
	email: 'abc@gmail.com',
	birthdateText: 'Born in 15-09-1992',
	interests:
		'Wide variety of interests, ranging from games, movies, music and design to nature walks, yoga, meditation & self-development. Slightly peculiar.',
	softskills: 'Eye for detail, learns quickly, empathy & user-oriented',
	skills: [
		'HTML',
		'CSS',
		'JavaScript',
		'TypeScript',
		'React',
		'Express.js',
		'SQL',
		'Java',
		'Python',
		'OutSystems',
	],
	// jobs: [NQJob, SaqureJob],
};

export type WorkExample = {
	title: string;
	url: string;
	cover: string;
	description: string;
	features?: {
		title: string;
		description: string;
		screenshot: string;
		isVertical?: boolean; //For screenshots with more height than width
		url: string;
	}[];
};

const exampleEnvestors = {
	title: 'Envestry',
	url: 'https://envestors.envestry.com',
	cover: 'https://miro.medium.com/max/1000/1*8PhF3sSsH6JHNU_ABPwhHQ.png',
	description:
		'Envestry is a secure online funding platform, a confidential space where sophisticated investors and high-growth businesses can connect, share information, secure deals and grow. I am helping them with a rebuild and am coding some front-end components in TypeScript.',
	features: [
		{
			title: 'Navigation bar & carousel',
			description:
				'A custom navigation bar that can show a given number of items in the bar or menu. How many items will show in the bar or menu can be customised for different screen sizes. The carousel rotates the display of a dynamic number of slides. Written in TypeScript and uses StyledComponents.',
			screenshot: envestryScreen,
			url: 'https://gist.github.com/mrkdoob/dc9b2d96fa85de7cd5fb990cc726ecb9',
		},
	],
};

const exampleCommonGrounds = {
	title: 'Common Grounds',
	url: 'https://app.commongrounds.co/',
	cover: screenshotCG,
	description:
		'Common Grounds allows freelancers, entrepreneurs & start-ups to access the most interesting co-working spaces. I have helped them develop some front-end features such as: implementing a customer booking ticket design, designing and creating a bookings dashboard, synchronize bookings with Google calendar & a data visualisation dashboard.',
	features: [
		{
			title: 'Booking ticket',
			description:
				'Implement a ticket design that customers can show on arrival.',
			screenshot: ticketScreenshot,
			isVertical: true,
			url: 'https://gist.github.com/mrkdoob/de3c5d329c0a46e84a116700eea77390',
		},
	],
};

const exampleUXDesign = {
	title: 'Reconnect UX Design: a self-development course MVP (WIP)',
	url:
		'https://xd.adobe.com/view/ab3927f5-dd86-43cd-6379-0d733d4cd586-dd08/?fullscreen',
	cover: reconnectScreen,
	description:
		'Even though there are many self-development courses, books and content. Many people struggle with actually changing their behaviour and following the tips and strategies that self-development courses offer. Achieving behavioural change through the use of information technology is a difficult but very interesting challenge. \n The current MVP design is based on different theories and uses different phenomena and elements such as social contagion, pressure, and gamification to try to motivate the user to perform the tasks given to them in any given course.',
};

export const workExamples: WorkExample[] = [
	exampleEnvestors,
	exampleCommonGrounds,
	exampleUXDesign,
];

// const NQJob = {
// 	date: 'Apr 2019 - Present',
// 	position: 'Front-end developer',
// 	responsibilities: 'Front-end development in React, testing & design',
// 	employer: 'No Quarter (freelance)',
// };

// const SaqureJob = {
// 	date: 'Nov 2018 - May 2019',
// 	position: 'Tester',
// 	responsibilities: 'Manual testing their front-end web application',
// 	employer: 'Saqure(freelance)',
// };

// const MainJob = {
// 	date: 'March 2018 - September 2018',
// 	position: 'Software developer',
// 	responsibilities: 'Full-stack development & testing using OutSystems',
// 	employer: 'Main Energie',
// };

// const internship = {
// 	date: 'February 2014 - July 2014',
// 	position: 'Intership',
// 	responsibilities: 'Information / business analysis',
// 	employer: 'Het Voedingscentrum',
// };

// const partJob = {
// 	date: '2008 - 2014',
// 	position: 'Several part-time jobs',
// 	responsibilities:
// 		'Different student jobs such as cleaning, website design (WordPress) and teaching programming basics',
// 	employer: 'Multiple',
// };
