<!-- 
	instagram grabber
	writen by alfianokt for masterkadal.com
 -->

<script>
	import {onMount} from 'svelte'

	import NotFound from './NotFound.svelte'
	import GraphImage from './GraphImage.svelte'
	import GraphSidecar from './GraphSidecar.svelte'
	import GraphVideo from './GraphVideo.svelte'
	
	let data = {
		url: null,
		result: null
	}

	let state = {
		load: false,
		caption: false,
	}
	
	let error = {
		reason: null,
		msg: null
	}
	
	async function main() {
		if (!/[http|https]:\/\/www.instagram.com\/p\/(.*?)/.test(data.url)) {
			return data.result = null
			error.reason = 'FailedToFetch'
			alert('Please give me valid instagram URL')
			return null
		}
		state.load = true
		const response = await fetch('https://cors-anywhere.herokuapp.com/' + data.url).catch((e) => {
			console.error('failed to fetch reason :', e)
		})
		state.load = false
		if (response == null) {
			data.result = null
			error.reason = 'FailedToFetch'
			return null
		}
		const body = await response.text()
		if (/dialog-404/.test(body)) {
			data.result = null
			error.reason = 'PostNotFound'
			return null
		}
		const ma = body.split('window._sharedData = ')[1].split(";</scr")[0]
		const json = JSON.parse(ma)
		data.result = json.entry_data.PostPage[0].graphql.shortcode_media
		console.log(data.result)
		resetError()
	}
	
	function captionTgl () {
		state.caption = !state.caption
	}
	
	function resetError () {
		error = {
			reason: null,
			msg: null
		}
	}

	onMount(() => {
		const parsedUrl = new URL(location)

		if(parsedUrl.searchParams.get('url') != null) {
			data.url = parsedUrl.searchParams.get('url')
			main()
		}
	})
</script>

<div class="columns">
	<div class="column col-md-12 col-6 my-1">
		<div class="card">
			<div class="card-header">
				<div class="card-title h5">Instagram Grabber</div>
				<div class="card-subtitle text-gray">Unduh media di postingan instagram.</div>
			</div>
			<div class="card-body">
				<div class="form-group" class:has-error={(data.url == null || data.url == '') ? false : !(/[http|https]:\/\/www.instagram.com\/p\/(.*?)/.test(data.url)) }>
					<label class="form-label" for="input-url">Instagram URL</label>
					<input class="form-input" type="text" id="input-url" placeholder="Enter Instagram URL" bind:value={data.url}>
					<span class="form-input-hint" class:d-none={(data.url == null || data.url == '') ? true : (/[http|https]:\/\/www.instagram.com\/p\/(.*?)/.test(data.url))}>Link not valid</span>
				</div>
			</div>
			<div class="card-footer">
				<button class="btn btn-primary" class:disabled={state.load} on:click={main}>Process</button>
			</div>
		</div>
	</div>
	<div class="column col-md-12 col-6 my-1">
		<div class="card">
			{#if state.load}
				<progress class="progress" max="100"></progress>
			{/if}
			<div class="card-header">
				<div class="card-title h5">Result</div>
			</div>
			<div class="card-body">
				<!-- Post Not Found -->
				{#if error.reason == 'PostNotFound'}
					<NotFound />
				{:else if error.reason == 'FailedToFetch'}
					<NotFound msg="Failed To Process Your Request"/>
				{/if}
				
				{#if data.result != null}
					<div class="chip">
						<img src={data.result.owner.profile_pic_url} class="avatar avatar-sm" alt="icon">
						{data.result.owner.username}
					</div>
					<button class="btn btn-primary btn-sm mt-3" on:click={captionTgl}>
						caption
						{#if state.caption}
							<i class="icon icon-arrow-down"/>
						{:else}
							<i class="icon icon-arrow-right"/>
						{/if}
					</button>
					{#if state.caption}
						<br class="mt-3">
						<em class="bg-secondary">
							{data.result.edge_media_to_caption.edges[0].node.text}
						</em>
					{/if}
					<!-- Start Content -->
					<br>
					{#if data.result['__typename'] == 'GraphImage'} 
						<GraphImage root={data.result} data={data.result.display_resources} />
					{:else if data.result['__typename'] == 'GraphSidecar'}
						<GraphSidecar root={data.result} data={data.result.edge_sidecar_to_children.edges} />
					{:else if data.result['__typename'] == 'GraphVideo'}
						<GraphVideo root={data.result} data={data.result}/>
					{/if}
				{/if}
			</div>
		</div>
	</div>
</div>