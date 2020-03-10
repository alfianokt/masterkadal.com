<!-- 
	master layout of the apps	
 -->

<script>
	import {onMount} from 'svelte'
	import config from '../_config.js'
	import {sidebar} from '../_sidebar.js'
	import Sidebar from '../components/utilities/Sidebar.svelte'

	let active  // the sidebar
	let scrollY // Y now
	let preffScrollpos // preff Y scroll
	let hideme = false // topbar hide logic

	sidebar.subscribe(v => active = v)

	// this function will be call after the page loaded
	onMount(() => {
		preffScrollpos = scrollY
	})

	function handleTopbar () {
		hideme = scrollY > 50 ?  preffScrollpos < scrollY : false
		preffScrollpos = scrollY
	}
</script>

<style scoped>
	/* hide topbar */
	.hideme {
		top: -50px;
	}
</style>

<svelte:window bind:scrollY={scrollY} on:scroll={handleTopbar}/>

<!--
	because sapper not include page when not calling in html element

	then we create "fake" link but its not showing in page
 -->
<div class="d-none">
	<a href="/tools">&nbsp;</a>
	<a href="/share">&nbsp;</a>
	<a href="/404">&nbsp;</a>
	<a href="/500">&nbsp;</a>
</div>

<div class="off-canvas bg-gray py-2 p-fixed" style="height: 52px; z-index: 999;" class:hideme={hideme && scrollY != 0}>
	<!-- off-screen toggle button -->
	<button class="off-canvas-toggle btn btn-action ml-2" on:click={() => {sidebar.update(n => n = !n)}}>
		<i class="icon icon-menu"></i>
	</button>

	<!-- sidebar -->
	<div id="sidebar" class="off-canvas-sidebar bg-light p-2" style="width: 225px;" class:active={active}>
		<Sidebar />
	</div>

	<!-- click to hide sidebar -->
	<div class="off-canvas-overlay c-hand" on:click={() => {sidebar.update(n => n = !n)}} />

	<div class="off-canvas-content pt-1">
		<header class="navbar">
			<section class="navbar-section">
			</section>
			<section class="navbar-section">
				<a href="/" class="label label-secondary text-bold h6" style="text-decoration: none;">
					{config.name}
				</a>
			</section>
		</header>
	</div>
</div>

<div class="columns" style="margin: 0;">
	<div class="column col-11 col-mx-auto mt-2">
		<div class="container" style="margin-top: 50px;">
			<div style="min-height: 77vh;">
				<!-- breadcrumb  slot / navigation -->
				<slot name="breadcrumb"></slot>
				<!-- main slot / main content  -->
				<slot></slot>
			</div>  
		</div>
		<!-- copyright footer -->
		<footer class="my-2 p-2">
			<p>
				<a href="https://fb.me/masterkadalcom" target="_blank">Facebook</a> .
				<a href="https://www.instagram.com/masterkadal_com/" target="_blank">Instagram</a>
				<!-- <a href="#a" target="_blank">Youtube</a> -->
			</p>
		</footer>
	</div>
</div>