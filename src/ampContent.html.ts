export const ampContent = `<!--
     Below is the mininum valid AMP4EMAIL document. Just type away
     here and the AMP Validator will re-check your document on the fly.
-->
<!doctype html>
<html ⚡4email data-css-strict>

<head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-sidebar"
            src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
    <script async custom-element="amp-carousel"
            src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"></script>
    <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
            <script async custom-element="amp-bind"
            src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
  <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
    <style amp4email-boilerplate>
        body {
          visibility: hidden
        }
    </style>
    <style amp-custom>
    .hero {
      height: 100vh;
    }

    .header {
      width: 100%;
      display: flex;
      background-color: var(--bg);
      color: var(--clr);
      padding: 1.3rem;
    }

    .nav-btn {
      border: none;
      background-color: transparent;
      color: var(--clr);
      font-size: 2rem;
    }

    .sidebar {
      background-color: var(--bg);
      color: var(--clr);
    }

    h1 {
      font-size: 40px;
    }

    main {
      margin: 2rem;
    }
  </style>
</head>

<body>
<header class="header">
    <button class="nav-btn" style="margin-right: 2rem;" on="tap:sidebar-left.toggle">☰</button>
    <h2>AMP app</h2>
</header>

<div class="hero">
    <amp-sidebar id="sidebar-left" class="sidebar" layout="nodisplay" side="left">
        <button class="nav-btn" on="tap:sidebar-left.close">X</button>
        <nav class="nav">
            <ul class="label">
                <li class="nav-item">Nav item 1</li>
                <li class="nav-item">Nav item 2</li>
                <li class="nav-item">Nav item 3</li>
                <li class="nav-item">Nav item 4</li>
            </ul>
        </nav>
    </amp-sidebar>
    <main>
        <div>Hello <span [text]="myText">Pls </span></div>
        <button on="tap:AMP.setState({ myText: 'work' })">Change text</button>
        <h1>AMP Page</h1>
        <amp-carousel width="600" height="400" layout="responsive" type="slides">
            <amp-img src="https://source.unsplash.com/Ji_G7Bu1MoM/600x400" width="600" height="400"
                     layout="responsive"></amp-img>
            <amp-img src="https://source.unsplash.com/4yCXNMLP9g8/600x400" width="600" height="400"
                     layout="responsive">
                </amp-img>
            <amp-img src="https://source.unsplash.com/QrgRXH81DXk/600x400" width="600" height="400"
                         layout="responsive"></amp-img>
            <amp-img src="https://source.unsplash.com/8QJSi37vhms/600x400" width="600" height="400"
                         layout="responsive"></amp-img>
        </amp-carousel>

        <form method="post" action-xhr="https://quick-server-krishh.herokuapp.com/post">
          <fieldset>
            <label>
              <span>Name:</span>
              <input type="text"
                name="name"
                on="change:AMP.setState({myText: event.value})"
                required>
            </label>
            <br>
            <label>
              <span>Job:</span>
              <input type="text"
                name="job"
                required>
            </label>
            <br>
            <input type="submit"
              value="Subscribe">
          </fieldset>
          <div submit-success>
            <template type="amp-mustache">
              Subscription successful!
            </template>
          </div>
          <div submit-error>
            <template type="amp-mustache">
              Subscription failed!
            </template>
          </div>
        </form>
    </main>
</div>
</body>

</html>`;
