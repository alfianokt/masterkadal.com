<script>
  import GraphImage from './GraphImage.svelte'
  import GraphVideo from './GraphVideo.svelte'
  
  
  export let root
  export let data

  console.log(data)
</script>

{#each data as _}
  <br>

  {#if _.node.__typename == "GraphImage"}
    <GraphImage root={root} data={_.node.display_resources}/>
  {:else if _.node.__typename == "GraphVideo"}
    <GraphVideo root={root} data={_.node}/>
  {/if}
{/each}