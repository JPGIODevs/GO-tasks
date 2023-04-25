export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["OLDBACKGROUND.jpeg","background.png","favicon.png","logo.png","navlogo.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b7ad062b.js","imports":["_app/immutable/entry/start.b7ad062b.js","_app/immutable/chunks/index.35a29703.js","_app/immutable/chunks/singletons.6389be79.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.92c10644.js","imports":["_app/immutable/entry/app.92c10644.js","_app/immutable/chunks/index.35a29703.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/map",
				pattern: /^\/map\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/todo",
				pattern: /^\/todo\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
