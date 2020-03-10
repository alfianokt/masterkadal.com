<script>
  import FileSaver from 'file-saver'
  import GraphImage from './GraphImage.svelte'

  export let root
  export let data

  function save() {
    const fname = root.owner.username + '_' + root.shortcode + '_' + root.dimensions.width + 'x' + root.dimensions.width + '.mp4'
    FileSaver.saveAs(data.video_url, fname)
  }
</script>

<GraphImage {root} data={data.display_resources} />
<br>
<video class="video-responsive" src={data.video_url} width={data.dimensions.width} height={data.dimensions.height} controls />
<div class="input-group mt-1">
  <span class="input-group-addon">Durasi Video :</span>
  <!-- <select class="form-select">
      <option></option>
  </select> -->
  <button class="btn btn-primary input-group-btn" on:click={save}>Simpan<span class="hide-xs"> Ke Galeri</span></button>
</div>