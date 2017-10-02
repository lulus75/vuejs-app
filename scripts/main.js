{
const Task = {
	 			props :['index','task'],
	 			template : `<li  class="collection-item">
				 <input type="checkbox" v-bind:id="'t_' + task.id" v-model="task.done">
				 <label v-bind:for="'t_' + task.id">{{ task.title }}</label>
				 <a href="#" v-on:click="removeTask(task)" class="link-delete" title="Supprimer cette tâche">
						 <i class="small material-icons">delete_forever</i>
				 </a>
		 </li>`
 };
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
		components: {
			'task' : Task
		},
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
			this.taskTitle =""
			localStorage.setItem('tasks', JSON.stringify(this.tasks));
			return task
    },
		removeTask(task) {
				var pos = this.tasks.indexOf(task);
				this.tasks.splice(pos, 1);
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
		},
		getUndoneTask() {
			return this.tasks.filter((task) => !task.done).length;
		}
		}
	});
}
