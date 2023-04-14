
<template>
 <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <!--Logo-->
       <div class="logo">
			<router-link to="/">
				<img src="../assets/final-jccs.png">
			</router-link>
       </div>
       <!--menu-->
       <div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">menu</span>
			</button>
		</div>

        <!--List items-->
        <h3>Dashboard</h3>
		<div class="menu">
			<router-link to="/laptop" class="button">
				<span class="material-icons">laptop_windows</span>
				<span class="text">Laptop</span>
			</router-link>
			<router-link to="/monitor" class="button">
				<span class="material-icons">monitor</span>
				<span class="text">Monitor</span>
			</router-link>
			<router-link to="/avaya" class="button">
				<span class="material-icons">tty</span>
				<span class="text">Avaya</span>
			</router-link>
			<router-link to="/systemUnit" class="button">
				<span class="material-icons">ad_units</span>
				<span class="text">System Unit</span>
			</router-link>
		</div>
        
        <!--Settings-->
        <div class="flex"></div>
		
		<div class="menu">
			<router-link to="/setting" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
   </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "false")
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 10rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
                
			}

           
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			&:hover {
				background-color: var(--dark-alt);
				.material-icons, .text {
					color: var(--primary);
				}
			}
			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);
				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}
	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}
	&.is-expanded {
		width: var(--sidebar-width);
		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3, .button .text {
			opacity: 1;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
               
			}
		}
		.footer {
			opacity: 0;
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>