<!-- 
  sidebar content

  path /src/components/utilities/Sidebar.svelte
 -->

<script>
  import config from '../../_config.js'
  import {sidebar} from '../../_sidebar.js'
  import {pranks, other, instagram} from '../../_accordion.js'

  let accordion = {
    pranks: false,
    other: false,
    instagram: false,
  }

  pranks.subscribe(v => accordion.pranks = v)
  other.subscribe(v => accordion.other = v)
  instagram.subscribe(v => accordion.instagram = v)

  function closeSidebar () {
    console.log('Sidebar closed')
    sidebar.update(s => s = false)
  }
</script>

<div class="text-center" style="margin-bottom: 16px;">
  <a href="/" class="label label-secondary text-bold h6" style="text-decoration: none;">
    {config.name}
  </a>
</div>

<!-- Dashboard -->
<div class="accordion my-2">
  <input id="accordion-dashboard" type="checkbox" name="accordion-checkbox" hidden="true">
  <label class="accordion-header c-hand" for="accordion-dashboard">
    <a href="/" class="text-dark" style="text-decoration: none;" on:click={() => sidebar.update(n => n = false)}>
      <i class="icon icon-apps bg-secondary text-primary s-circle"></i>
      Dashboard
    </a>
  </label>
</div>

<!-- Prank Tools -->
<details class="accordion my-2" bind:open={accordion.pranks}>
  <summary class="accordion-header c-hand">
    <i class="icon icon-arrow-right bg-secondary text-primary s-circle"></i>
    Prank Tools
  </summary>
  <div class="accordion-body">
    <ul class="menu menu-nav">
      <li class="menu-item"><a href="/tools/tokotalk" on:click={() => sidebar.update(n => n = false)}>Spam TokoTalk</a></li>
      <li class="menu-item"><a href="/tools/oyo" on:click={() => sidebar.update(n => n = false)}>Spam OYO</a></li>
      <li class="menu-item"><a href="/tools/chataja" on:click={() => sidebar.update(n => n = false)}>Spam ChatAja</a></li>
    </ul>
  </div>
</details>

<!-- Instagram Tool -->
<details class="accordion my-2" bind:open={accordion.instagram}>
  <summary class="accordion-header c-hand">
    <i class="icon icon-arrow-right bg-secondary text-primary s-circle"></i>
    Instagram Tools
  </summary>
  <div class="accordion-body">
    <ul class="menu menu-nav">
      <li class="menu-item"><a href="/tools/instagrab" on:click={() => sidebar.update(n => n = false)}>Instagrab</a></li>
    </ul>
  </div>
</details>

<!-- Other Tool -->
<details class="accordion my-2" bind:open={accordion.other}>
  <summary class="accordion-header c-hand">
    <i class="icon icon-arrow-right bg-secondary text-primary s-circle"></i>
    Other Tools
  </summary>
  <div class="accordion-body">
    <ul class="menu menu-nav">
      <li class="menu-item"><a href="#/">Soon</a></li>
    </ul>
  </div>
</details>

<!-- About -->
<div class="accordion my-2">
  <input id="accordion-dashboard" type="checkbox" name="accordion-checkbox" hidden="true">
  <label class="accordion-header c-hand" for="accordion-dashboard">
    <a href="/about" class="text-dark" style="text-decoration: none;" on:click={() => sidebar.update(n => n = false)}>
      <i class="icon icon-emoji text-primary"></i>
      About
    </a>
  </label>
</div>