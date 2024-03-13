const { createApp } = Vue

createApp({
	data() {
		return {
			newTask: {
				text: '',
				done: false,
			},
			textNewTask: '',
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
		}
	},

	//Qui le funzioni
	methods: {

		removeTask(index) {
			console.log('remove this task', index);
			this.list.splice(index, 1);
		},

		addTask() {
			//console.log('aggiungi questa task', this.newTask);
			//console.log(this.textNewTask);
			this.newTask.text = this.textNewTask;
			//console.log(this.newTask);
			this.list.unshift(this.newTask);			
		}
 
	},
 
	//qui nell' hook mounted
	mounted() {
		console.log(this.list);
		//console.log("ciao")
	}

}).mount('#app')