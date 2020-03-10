<script>
  import config from '../../_config.js'
  import {sidebar} from '../../_sidebar.js'
  import {pranks} from '../../_accordion.js'
</script>

<svelte:head>
	<title>Tools - {config.name}</title>
	<meta property="og:title" content={"Tools - " + config.name} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://masterkadal.com/tools" />
	<meta property="og:site_name" content={config.name} />
	<meta name="description" content="Masterkadal adalah penyedia layanan tool online di indonesia, di sini kamu dapat menemukan banyak tools yang mungkin bermanfaat untukmu atau orang lain">
	<meta name="keyword" content="online tool, tool online, masterkadal">
</svelte:head>

<!-- breadcrumb -->
<slot name="breadcrumb">
	<ul class="breadcrumb">
		<li class="breadcrumb-item tooltip tooltip-bottom" data-tooltip="Tools">
			<span class="c-hand" on:click={() => {sidebar.update(n => n = !n); pranks.update(n => n = true)}}>
				<small class="label label-secondary text-bold h6">Tools</small>
			</span>
		</li>
	</ul>
</slot>

<!-- tool name -->
<div class="hero bg-gray">
	<div class="hero-body">
		<h1>Daftar Tools</h1>
		<p>Silahkan cek sidebar untuk melihat daftar tools!</p>
	</div>
</div>