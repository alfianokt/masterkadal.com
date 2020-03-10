<script>
	import config from '../_config.js'
	import {sidebar} from '../_sidebar.js'
</script>

<svelte:head>
	<title>About</title>
	<meta property="og:title" content={"About - " + config.name} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://masterkadal.com/about" />
	<meta property="og:site_name" content={config.name} />
	<meta name="description" content="Masterkadal adalah penyedia layanan tool online di indonesia, di sini kamu dapat menemukan banyak tools yang mungkin bermanfaat untukmu atau orang lain">
	<meta name="keyword" content="online tool, tool online, masterkadal, about masterkadal, tentang masterkadal">
</svelte:head>


<!-- breadcrumb -->
<slot name="breadcrumb">
	<ul class="breadcrumb">
		<li class="breadcrumb-item tooltip tooltip-bottom" data-tooltip="About">
			<span class="c-hand">
				<small class="label label-secondary text-bold h6" on:click={() => {sidebar.update(n => n= !n)}}>About</small>
			</span>
		</li>
	</ul>
</slot>

<h1>Tentang kami</h1>

<p>Masterkadal adalah penyedia layanan tool online di indonesia, di sini kamu dapat menemukan banyak tools yang mungkin bermanfaat untukmu atau orang lain.</p>

<p>Jangan lupa untuk follow sosial media kami ya :)</p>