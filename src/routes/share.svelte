<!-- <script context="module">
	export async function preload({query }) {
		if (/[http|https]:\/\/www.instagram.com\/p\/(.*?)/.test(query.text)) {
      this.redirect(301, `/tools/instagrab?url=${query.text}`)
    } else {
      this.redirect(301, '/')
    }
	}
</script> -->


<script>
  import config from '../_config.js'
  import {onMount} from 'svelte'
  import {sidebar} from '../_sidebar.js'

  onMount(() => {
    const parsedUrl = new URL(location)

    // instagram shareable link
    if (/[http|https]:\/\/www.instagram.com\/p\/(.*?)/.test(parsedUrl.searchParams.get('text'))) {
      window.location.href = `/tools/instagrab?url=${parsedUrl.searchParams.get('text')}`
    } else {
      // if nothing todo, go back to root
      // window.location.href = '/'
    }
  })
</script>

<svelte:head>
	<title>Share - {config.name}</title>
  <meta property="og:title" content={"Share - " + config.name} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://masterkadal.com/share" />
	<meta property="og:site_name" content={config.name} />
	<meta name="description" content="Bagikan sesuatu ke masterkadal. Jika yang kamu bagikan ada di salah satu tools kami, kami akan membawamu kesana.">
	<meta name="keyword" content="online tool, tool online, masterkadal, bagikan ke masterkadal, cara bagikan ke masterkadal">
</svelte:head>


<!-- breadcrumb -->
<slot name="breadcrumb">
	<ul class="breadcrumb">
		<li class="breadcrumb-item tooltip tooltip-bottom" data-tooltip="Share" on:click={() => {sidebar.update(n => n= !n)}}>
			<small class="label label-secondary text-bold h6">Share</small>
		</li>
	</ul>
</slot>

<!-- tool name -->
<div class="hero bg-gray">
	<div class="hero-body">
		<h1>Share</h1>
    <p>Disini adalah halaman "Share" untuk aplikasi <a href="https://en.wikipedia.org/wiki/Progressive_web_application" target="_blank">PWA</a></p>
    <p>Kamu akan diarahkan ke tools yang sesuai, atau kalau tidak <a href="/">klik disini</a> untuk kembali ke beranda.</p>
	</div>
</div>