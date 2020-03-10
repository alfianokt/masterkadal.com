<!-- 
	slug page tools

	path /src/routes/tools/[slug].svelte
 -->

<script context="module">
	export async function preload({ params, query }) {
		const slug = params.slug
		const res = await this.fetch(`tools/${slug}.json`);
		const data = await res.json();
    // console.log(data)
		if (res.status === 200) {
			return { data,slug };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  export let slug
	export let data
	
	import config from '../../_config.js'
	import {sidebar} from '../../_sidebar.js'
	import {pranks, other, instagram} from '../../_accordion.js'

	// list tools
  import ToolsPrankTokoTalk from '../../components/tools/pranks/tokotalk/TokoTalk.svelte'
  import ToolsPrankOyo from '../../components/tools/pranks/oyo/Oyo.svelte'
  import ToolsPrankChataja from '../../components/tools/pranks/chataja/Chataja.svelte'
	import ToolsInstagramInstagrab from '../../components/tools/instagram/instagrab/App.svelte'
	
	// this functuin will open sidebar and accordion
	function accordionOpen () {
		sidebar.update(n => n = !n)
		const _pranks = ['tokotalk', 'oyo', 'chataja']
		const _other = ['']
		const _instagram = ['instagrab']

		_pranks.forEach(e => e == slug ? pranks.update(n => n = true) : '')
		_other.forEach(e => e == slug ? other.update(n => n = true) : '')
		_instagram.forEach(e => e == slug ? instagram.update(n => n = true) : '')
	}
</script>

<svelte:head>
	<title>{data.full_name} - {config.name}</title>
	<!-- todo: add seo -->
	<meta property="og:title" content={data.full_name} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={"https://masterkadal.com/tools/" + slug} />
	<meta property="og:site_name" content={data.full_name} />
	<meta name="description" content={data.description}>
	<meta name="keyword" content={data.keyword}>
</svelte:head>

<!-- breadcrumb -->
<slot name="breadcrumb">
	<ul class="breadcrumb">
		<li class="breadcrumb-item tooltip tooltip-bottom" data-tooltip="Tools">
			<span class="c-hand" on:click={accordionOpen}>
				Tools
			</span>
		</li>
		<li class="breadcrumb-item tooltip tooltip-bottom" data-tooltip={data.full_name}>
			<span class="c-hand">
				<small class="label label-secondary text-bold h6">{slug}</small>
			</span>
		</li>
	</ul>
</slot>

<slot>
{#if slug == 'instagrab'}
	<ToolsInstagramInstagrab />
{:else if slug == 'tokotalk'}
	<ToolsPrankTokoTalk />
{:else if slug == 'oyo'}
	<ToolsPrankOyo />
{:else if slug == 'chataja'}
	<ToolsPrankChataja />
{/if}
</slot>