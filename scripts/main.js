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
			addTask: function () {
				var getLastId = -1;
				if(this.tasks.length !== 0){
						getLastId = this.tasks[this.tasks.length-1].id
				}
      this.tasks.push({
        id: getLastId+1,
        title: this.taskTitle,
        done: false
      })
      this.task = ''
    },
		removeTask(task) {
				var pos = this.tasks.indexOf(task);
				this.tasks.splice(pos, 1);
		},
		getUndoneTask() {
			return this.tasks.filter((task) => !task.done).length;
		}
		}
	});
}
