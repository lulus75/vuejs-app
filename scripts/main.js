{
function getLocaltorageitem(){
	var getLocalStorage = JSON.parse(localStorage.getItem('tasks'));
	if(getLocalStorage == null){
		return []
	}else{
		return getLocalStorage
	}
}

getLocaltorageitem();
	let vm = new Vue({
		el : '#app',
		data: {
			taskTitle: '',
			task: {},
			tasks : getLocaltorageitem()
		},
		filters: {
		    pluralize: function (n,word) {
		      return n <= 1 ? n +' '+ word : n + ' '+word+'s'
		    }
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
			localStorage.setItem('tasks', JSON.stringify(this.tasks));
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
