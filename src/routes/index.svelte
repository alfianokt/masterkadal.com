<script>
	import config from '../_config.js'
</script>

<svelte:head>
	<title>Dashboard - {config.name}</title>
	<meta property="og:title" content={"Dashboard - " + config.name} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://masterkadal.com/" />
	<meta property="og:site_name" content={config.name} />
	<meta name="description" content="Masterkadal adalah penyedia layanan tool online di indonesia, di sini kamu dapat menemukan banyak tools yang mungkin bermanfaat untukmu atau orang lain">
	<meta name="keyword" content="online tool, tool online, masterkadal">
</svelte:head>

<!-- breadcrumb -->
<slot name="breadcrumb">
	<ul class="breadcrumb">
		<!-- <li class="breadcrumb-item tooltip tooltip-bottom" data-tooltip="Dashboard">
			<a href="/">Dashboard</a>
		</li> -->
		<li class="breadcrumb-item tooltip tooltip-bottom" data-tooltip="Dashboard">
			<a href="/">
				<small class="label label-secondary text-bold h6">Dashboard</small>
			</a>
		</li>
	</ul>
</slot>

<!-- tool name -->
<div class="hero bg-gray">
	<div class="hero-body">
		<h1>Selamat Datang</h1>
		<p>Jangan lupa like dan follow sosial media kami juga ya!</p>
	</div>
</div>

<!-- <div class="card mt-2">
	<div class="card-header">
		<div class="card-title h5">Title</div>
		<div class="card-subtitle text-gray">Description</div>
	</div>
	<div class="card-body">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam vitae asperiores illum itaque ad ab? Mollitia ipsum delectus cupiditate, autem rem quisquam ut. Veritatis corporis illum illo totam assumenda fugiat!
	</div>
	<div class="card-footer">
		<button class="btn btn-primary">Submit</button>
	</div>
</div> -->