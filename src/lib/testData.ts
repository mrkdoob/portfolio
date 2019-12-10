export type Person = {
	avatarUrl: string;
	name: string;
	email: string;
	interests: string;
	softskills: string;
	skills: string[];
};

export const person: Person = {
	avatarUrl:
		'https://lh3.googleusercontent.com/oVONXWV8Gb0daGJ4rOc2DKtzoIVP3ZjXmZHRvl5Dmr9OE-W-CyGfl1JoWosz0qAEsZVqcMKJHMb4e4IhnHs98DXAnEEbswSdShEol5Cr4yetoBT41RsKGysjqonSMdPsYI511zo0vWVpxKTKhHnHQdkIyY2QspAS7yUAGM96OiFXni2OcQJOZb49zevedxcCQBnO2YePu474SRzxv0Gu1eZbUiSF_YFe0BZ8BZAsdxbYI6AbdnDKvn6PBgVhh0-M__RxtKe6OZvJp3Ry5X97-NAsD0FKlk-2cKEYKMyNw3JfqX7Lfzk6BoicBkZ_PQ7QWR90FvkSkPMVYOEDbsGZVCJpOqdsXrVV6W3KGZ1oeji-UBM0lGftv128GOIL3vGKjsuKTzI_Gn7Tx1FpSfTW3V-uMpCrAr2imAC0qxblvnAg9MC6FMgkQTP3P3-ohBVYc3G8KTTVlFB3UuaDtclruu49XO--9UgHjyz3q161jw4bOxt6teScFl3XfOnfju2DNoZ0PPhr-8L-yxJunE-1M7A7RHsY9IYmBEBonnVOEp2W8XvNhFspzsSTqmduNaBTseImFNr9i9FYW-gZoTNcaGRRmAmFp4XTM-EBxF0Ox3pC2tnsPJbAjxkC86ki7vFJByXoTWfnkqgXvY6iz1OxwPKfna2H9-RVOtAouwvN7ykcRKQimJ2wlA=w454-h508-no',
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
				'https://lh3.googleusercontent.com/vbt86K0MgyTWPjtq01ao3SVClyKD6wD2EFDVscWZKG4CZxFJYhThs8_JrqnFk-2v6lYOK2qLUotg0n-1xwaI9vXGHaDM-fLYbBpIu1RrD6ByEoasEzBmla7PXy6EZDAzVFsN44GdAF4uIRThcb-84_P7ZVfcrq6ZW0NLwaHuW_7-BmjuiDa4cM46dgm8ut2hkcf2aXkm2UL4Pjn855c5iywuXls5nsLUY1l3F163hatSshR9Vm7HHTjDkkb2KOjekTRTzg-1emad2cGP8bRpsdHz9Yx5Sb9KlvQAtU2HVle7AozWlvMm0YLqE5lr1OTeI2JU-Dskc6Da2Rd8u-g4X4O4Rm6SAMb0xO6StA9DplUjnkbR3J_SBT6RNF6lzzMEr0DXKrN9a2ON5acQqn703KRssXzNUazKBugmU8-vsQc6AsM6KxbWHnmQyOUa_4qyvT73zxSpZn5ytxRc6gJqBtdK-5GxuPoDoAJJmV6VbR2WihrtRisOP-1utiusYypHtYQHADGikfhPk71b3EdqOFb2lSPUlZYaSdQlVndOmq7k31FXZB8Q_sLt78bN0e_5r_dfrjSlyYIzVHu5gC4nhNINZDW1Oij8t8yJm3PWF2CM7ylmk9fkGgWqm5i31oN2FVnlO19apY-fe62Aytf5B_IYisUM75szvIh-JljhL_dM5ko3BwfKrw=w2792-h1840-no',
			url: 'https://gist.github.com/mrkdoob/48e25bd5eb2a7d8f771b06d5faa93e4e',
		},
		{
			title: 'Documents admin panel',
			description:
				'A tab in the admin panel to allow deal managers and companies to upload, edit and delete important documents. I have done both the front-end and back-end work for the admin panel, monitor page (for investors to track their investments) and deal page (for investors to view all deal details).',
			screenshot:
				'https://lh3.googleusercontent.com/utSIzxjnD9-YLXJG4b6PHxa2p5hovSXTqCsDRVb7Sqf6DPcmyvRoZnVHj4EVmY80XiZ4kS7A7CEZEEqPcoCjFNMlkUVQmyUq9YVQWbPbjbV2RKbVXYmy-Gyi6r3Y4TwSR0pUU8hdxFcMniSgChGiu_--YdEX0sLBoeejAUquf8iIU0EPISm_HOwMvdcebIH22UQ549j3b_ZWPHvEZgJYDz7vW1wyJBRXpzZfs3-2cjNSvgpCrr3UR_r0n_t3UOULKYCPXfMWsJdMDzdPXnbw47R9Vvd9Rz6Zio0zPloYnQUCwKpaeKkxk7goJ2SBPrMMzlj7zzXE2VMkqi63KOj7O50F42wcMUCq1USz004RAlSq0uN7yYMuFP0nxtakHorTxRC7qLia_AMTB5bUZkWGbluaYf6SN3brMLNDwM2JNGNUy6rzLHeAI7jQ2pQ3sy-cQI0zlx6O6rs_qMQPJlNCHu4gIBwZcuFZU74ks2cvCS7_GUUMtoya_-o6MsUyUqtx3p8QGA60moLb_n8Q-qwjGicjJ7ectTfVvfvDJIDWyhCaCGyP4VytKh2EQdppsHscDWpqqzPlhpD3d8tBr896Fc8OliNSu4FdCHpqXYdligOrO6A7Gc5jFQ62pvUIyobScEB59EyYwLu9LeO17RTe3PlJTdCDmzZT85hoAcqEncB43afwdftjBg=w2010-h1236-no',
			url: 'https://gist.github.com/mrkdoob/b71e62fa33a8344542f80614b5eaed19',
		},
	],
};

const exampleCommonGrounds = {
	title: 'Common Grounds',
	url: 'https://app.commongrounds.co/',
	cover:
		'https://lh3.googleusercontent.com/s_E-k0zzDeXpUYH9zPFc9iSdGl5CIhlW2HgWOhnBPgzgdXMp3vluBj6uRP4r0l2F1XLHF34O0Q1nr0X_PGDYo83eL1mO5gka-DE_yJgLW-B9r6AAt27B1RWlkUw-YS3g4I1AYDTgOL5VCge-dHjuDX_9mQV6LLM7TmPFcSKhmIZ0doUId3VNJ81SbTxAt4TdK1kytEkni1_EwUDcZcCyhpUuQdk_A0VfXScVU2tcHsHHeq2HEkvrjnMnWleoLE_u_FhhXQC9u_2NHDFQJnU_ss94PJtLWtXZUuRnWKqz3-sCTbVOheQ0R13lEf7BABBfTQ6GIteN1fnq4a1UlouKu5O6-QcYxIw1WIKUfwynrr3mJFqQZ1a52wcx6nU46iWEdC9MQW5lqClmx_EAac1cLyt-9Bkaa9ncuH5MLxQxQFq6AKLg6JCfBQjHd3mDmvbIaNBBinDNHOx_W5Jr7WQrtdNs0hSKcJr36LXd-gUp-4BCDe8o4BtjPEz4oZMkD3avCqiRw3qX6SYnShrt7SOiwZ9xBfZpwf3lPk1R_701wmIXLwd73JmF0GX2Ej0y75k0tmVvcn7SoS2K91lSVi-fiYWUf6f5DqoaIDN-5ksDClIjLDz8AKCBelL6bzPOyy3pzLKofje45tnMIZ73y1vC-YFzq8NSSM1vNd_emHpCGARRjKjrjRagHA=w1600-h977-no',
	description:
		'Common Grounds allows freelancers, entrepreneurs & start-ups to access the most interesting co-working spaces. I have helped them develop some front-end features such as: implementing a customer booking ticket design, designing and creating a bookings dashboard, synchronize bookings with Google calendar & a data visualisation dashboard.',
};

const exampleUXDesign = {
	title: 'Reconnect UX Design: a self-development course MVP (WIP)',
	url:
		'https://xd.adobe.com/view/ab3927f5-dd86-43cd-6379-0d733d4cd586-dd08/?fullscreen',
	cover:
		'https://lh3.googleusercontent.com/_xgtI-2qEOd71CA2aoEsfBxZLyXAaIn0_75rkX2EHQXw13isyaTtls8Tu_ScRb3WxBTwogXtMcY3IPHSeLLQfu0k0q8ofXblEOfv5Q3Lt_yYBR7A_03NPoJFME-I09Oz2c8ujkdb6tuCtJ9Qh3A2GoqZeTxuCiokMz5-0mXdvC5ABtNXcv0AqPVC7lRYSPBqCgBK9ST-RzuJSmAfLHhHqG0qsIeZVPWwHWQIZQcoU9v9mN_yLkQj6Wsf6W20vxzSnyl9q-QC2NHcSY-k3D_JXkXjhMvqkq34AkrlHeF88wCXnsxH39mOX3_JtNirKEP9eXHGiXxlgx80DzZi8eMJYI5_XntqE3Kc8BqRvL7G5HJ8ySIWrgBqesqONGAXEVqFRpqROBtAtASnZ-a8To4PonQG5IlCFfQ88mleIE_tB7gTokJbG5BaLWJJoiLMcc4UxWI9mGEK0xRhKANkq3YExpGWhupoTt2fCDjax21UI4oehRIT6llnF_OK3R596C3EkumFx0n-hzCjRNphBGBI6QHPfQHTFZ0CqpIHh_lYhviAtZCtJ58QbVs1hFL5O-vHefS6ItnUIdbom5-N0d_x-_F9nT_zGFi4LuFj7mqhtN7m4uip1qPK3Z_QnTKEBseDofyqoRFWKsWQc3s9G4IMmkW5GfTM_BcYW5GG14CSex_FErSSANabMg=w2726-h1532-no',
	description:
		'Even though there are many self-development courses, books and content. Many people struggle with actually changing their behaviour and following the tips and strategies that self-development courses offer. Achieving behavioural change through the use of information technology is a difficult but very interesting challenge. \n The current MVP design is based on different theories and uses different phenomena and elements such as social contagion, pressure, and gamification to try to motivate the user to perform the tasks given to them in any given course.',
};

export const workExamples: WorkExample[] = [
	exampleEnvestors,
	exampleCommonGrounds,
	exampleUXDesign,
];
