<template>
	<div>
		<h2>Klik tombol dibawah untuk mengambil data dari : {{url}}</h2>
		<input type="text" v-model="url">
		<button class="button-primary" v-on:click="fetch">Ambil data</button>
		<div class="row" v-for="user in users">
			<div class="two columns">
				<img :src="user.avatar" alt="">
			</div>
			<div class="ten columns">
				<p>{{user.first_name}} {{user.last_name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Axios from 'axios'

	module.exports = {
		data: {
			users: [],
			url: 'https://reqres.in/api/users?page=1'
		},
		methods: {
			fetch (){
				this.users = []
				Axios.get(this.url)
				.then(data=>{
					this.users = data.data.data
					window.users = data.data.data
				})
			}
		}
	}
</script>