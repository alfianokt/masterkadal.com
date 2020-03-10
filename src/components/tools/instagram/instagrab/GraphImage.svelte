<script>
  import FileSaver from 'file-saver'

  export let root
  export let data
  let res = 0

  function save () {
    const fname = root.owner.username + '_' + root.shortcode + '_' + data[res].config_width + 'x' + data[res].config_height + '_' + res + '_' + '.jpg'
    FileSaver.saveAs(data[res].src, fname)
  }

  console.log('GraphImage data', data)
</script>

<br>
<img src={data[res].src} class="img-responsive" alt="images">

<div class="input-group mt-1">
  <span class="input-group-addon">Resolusi</span>
  <select class="form-select" bind:value={res}>
    {#each data as _, i}
      <option value={i}>{_.config_width} x {_.config_height}</option>
    {/each}
  </select>
  <button class="btn btn-primary input-group-btn" on:click={save}>Simpan <span class="hide-xs"> Ke Galeri</span></button>
</div>