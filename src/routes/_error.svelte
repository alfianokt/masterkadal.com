<script>
	export let status;
	export let error;

	import config from '../_config.js'

	const dev = process.env.NODE_ENV === 'development';

	function setTitle () {
		if (status == 404) {
			return {name: 'Halaman tidak ditemukan', desc: 'Halaman tidak ditemukan atau mungkin sudah dihapus oleh pemilik website.'}
		} else {
			return {name: 'Kesalahan', desc: 'Kesalahan tidak diketahui, cobalah bertanya ke pemilik website.'}
		}
	}
</script>

<svelte:head>
	<title>
		{setTitle().name} - {config.name}
	</title>
</svelte:head>

<div class="hero bg-gray">
	<div class="hero-body">
		<h3>
			{setTitle().name}
			<h5>{status}</h5>
		</h3>
		<p>{setTitle().desc}</p>
		<h1 class="text-center">🙃</h1>
	</div>
</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
