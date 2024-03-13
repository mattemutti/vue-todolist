const { createApp } = Vue

createApp({
	data() {
		return {
			list: [
				{
					text: 'Quarterly Newsletter',
					done: false,
				},
				{
					text: 'Recruiting Blog Post',
					done: false,
				},
				{
					text: 'mobile app luaunch',
					done: true,
				},
				{
					text: 'Interview John H.',
					done: false,
				},
				{
					text: 'Summit update to mobile storefonts',
					done: true,
				},
				{
					text: 'Schedule Meeting with Alex',
					done: false,
				},
				{
					text: 'Hompage refresh',
					done: false,
				},
				{
					text: 'On board new sales team members',
					done: false,
				},
				{
					text: 'Review editorial calendar',
					done: false,
				},
			],

			//Qui andranno le funzioni
			methods: {



			},

			//qui nell' hook mounted
			mounted() {
				//console.log(this.list),
				//console.log("ciao")
			}




		}
	}
}).mount('#app')