<script lang="ts">
  let logosrc = "./navlogo.png";
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="{logosrc}" alt="logo" class="d-inline-block align-text-top navlogo"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          <a class="nav-link" href="/about">About</a>
          <a class="nav-link" href="/map">Maps</a>
        </div>
      </div>
    </div>
  </nav>

<slot />

<style>
    a{
        color:white;
    }
    .navbar{
        background-color: rgba(0, 0, 0, 0.3);
    }
    .navlogo{
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100px;
    }
</style>
