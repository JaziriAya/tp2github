<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />

    <title>Le jeu de devinette de nombres</title>

    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .form input[type="number"] {
        width: 200px;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Deviner un nombre</h1>

    <p>
      Nous avons sélectionné un nombre aléatoire entre 1 et 100. Essayez de le
      deviner en 10 tentatives ou moins. Nous vous indiquerons si votre
      proposition est trop grande ou trop petite.
    </p>

    <div class="form">
      <label for="guessField">Entrez une proposition&nbsp;: </label>
      <input
        type="number"
        min="1"
        max="100"
        required
        id="guessField"
        class="guessField" />
      <input type="submit" value="Proposer" class="guessSubmit" />
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>
      // Votre JavaScript va ici
    </script>
  </body>
</html>
