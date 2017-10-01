{

	let vm = new Vue({
		el : '#app',
		data: {
			taskTitle: '',
			task: {},
			tasks : [

			]
		},
		methods: {
		getUndoneTask() {
			return this.tasks.filter((task) => !task.done).length;
		}
		}
	});
}
