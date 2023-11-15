<template>
	<div class="container-fluid">
		<div class="todo">
			<div class="todo_header">
				<div>
					<span>TodoList</span>
				</div>
				<div>
					<button @click="showModal = true;">Добавить</button>
				</div>
			</div>
			<div class="todo_main">
				<div v-if="items.length === 0" class="empty_list">
					<span>Добавьте свою первую задачу</span>
				</div>
				<ul v-else class="todo_list">
					<li class="todo_list_item" v-for="(item, index) in items" :key="index">
						<div class="text" 
							:class="{done: item.done, important: item.important}" 
							@click="editStatusDone(item)"
						>
							<span>{{item.text}}</span>
						</div>
						<div class="button" @click="deleteItem(item.id)">
							X
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="modal" :class="{'d-block': showModal }">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Добавление новой задачи</h5>
					<button class="btn-close" @click="showModal = false;"></button>
				</div>
				<div class="modal-body">
					<div class="block">
						<div class="x_item x_label">
							Задача
						</div>
						<div class="x_item x_input">
							<input type="text" v-model="newItem.text">
						</div>
					</div>
					<div class="block">
						<div class="x_item x_label">
							Высокий приоритет
						</div>
						<div class="x_item x_input">
							<input type="checkbox" v-model="newItem.important">
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-success" @click="addItem" :disabled="newItem.text.length === 0">
						Добавить
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TodoList',
		data() {
			return {
				currentID: 0,
				items: [
					{id: 1, done: false, important: false, text: "12345678901234567890123456789012345678901234567890123456789012345678901234567890"},
					{id: 2, done: true, important: true, text: "test-2"},
					{id: 3, done: true, important: false, text: "test-3"},
					{id: 4, done: false, important: true, text: "test-4"},
					{id: 5, done: false, important: false, text: "test-5"},
					{id: 6, done: false, important: false, text: "test-6"},
					{id: 7, done: false, important: false, text: "test-7"},
					{id: 8, done: false, important: false, text: "test-8"},
					{id: 9, done: true, important: false, text: "test-9"},
					{id: 10, done: false, important: false, text: "0"},
					{id: 11, done: false, important: false, text: "test-10"},
					{id: 12, done: false, important: false, text: "9876543210987654321098765432109876543210987654321098765432109876543210"},
					{id: 13, done: false, important: false, text: "test-12"},
					{id: 14, done: false, important: true, text: "END TEST"},
				],
				newItem: {
					text: "",
					important: false
				},
				showModal: false
			}
		},
		methods: {
			addItem(){
				this.items.push({
					id: this.currentID,
					text: this.newItem.text,
					important: this.newItem.important,
					done: false
				});
				this.newItem = {
					text: "",
					important: false
				};
				this.currentID++;
				this.showModal = false;
			},
			deleteItem(item_id){
				this.items = this.items.filter(item => item.id !== item_id)
			},
			editStatusDone(item){
				item.done ^= true;
			}
		},
		mounted(){
			this.currentID = this.items.length + 1;
		}
	}
</script>

<style name="main" scoped>
	.container-fluid{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}

	.todo{
		display: flex;
		flex-direction: column;
		width: 600px;
		aspect-ratio: 3 / 2;
		background-color: #A497D9;
		border-radius: 5px;
	}
	.todo > .todo_header{
		display: flex;
		flex-basis: 10%;
		justify-content: space-between;
		background-color: #8800FF;
		border-radius: 5px;
	}
	.todo > .todo_header > div{
		display: flex;
		align-items: center;
		margin: 4px;
		font-size: 12px;
		user-select: none;
	}
	.todo > .todo_header > div > span{
		color: white;
		font-weight: bold;
	}
	.todo > .todo_header > div > button{
		border: none;
		padding: 2px;
		font-weight: bold;
		border-radius: 5px;
	}
	.todo > .todo_main{
		display: flex;
		flex-direction: column;
		flex-basis: 90%;
		height: 100%;
		margin: 4px;
	}
	.todo > .todo_main > .empty_list{
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100%;
		max-height: 100%;
		color: black;
		font-weight: bold;
		user-select: none;
	}
	.todo > .todo_main > .todo_list{
		min-height: 100%;
		max-height: 100%;
		margin: 0;
		padding: 0;
		overflow-y: auto;
		list-style-type: none;
		scrollbar-width: thin;
		scrollbar-color: #2222FF #F0F0F0;
	}
	.todo > .todo_main > .todo_list::-webkit-scrollbar {
		width: 10px;
	}
	.todo > .todo_main > .todo_list::-webkit-scrollbar-thumb {
		background-color: #2222FF;
		border-radius: 5px;
	}
	.todo > .todo_main > .todo_list::-webkit-scrollbar-track {
		background-color: #F0F0F0;
		border-radius: 5px;
	}
	.todo > .todo_main > .todo_list > .todo_list_item{
		display: flex;
		margin: 5px;
		border: 1px solid black;
		color: #000000;
		background-color: white;
		user-select: none;
	}
	.todo > .todo_main > .todo_list > .todo_list_item > .text{
		display: flex;
		flex-direction: column;
		flex-basis: 90%;
		overflow-wrap: anywhere;
	}
	.todo > .todo_main > .todo_list > .todo_list_item > .button{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-basis: 10%;
		border-left: 1px solid black;
		color: #FF0000;
	}

	.modal-body > .block{
		display: flex;
		justify-content: space-between;
		margin: 10px 0px;
	}
	.modal-body > .block > .x_item{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.modal-body > .block > .x_label{
		flex-basis: 35%;
		align-items: center;
	}
	.modal-body > .block > .x_input{
		flex-basis: 65%;
	}
	.modal-body > .block > .x_input > input[type="checkbox"]{
		align-self: flex-start;
	}
</style>

<style name="custom" scoped>
	.done{
		text-decoration: line-through;
		color: #888888 !important;
	}
	.important{
		color: #FF0000;
	}
</style>