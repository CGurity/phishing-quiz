<?php
session_start();
unset($_SESSION['quiz']);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Quiz de Phishing</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link href="/res/css/grid.css" rel="stylesheet">
    <link href="/res/css/devices.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    <script src="res/js/quiz.js"></script>
    <!-- Custom styles for this template -->
    <!-- <link href="grid.css" rel="stylesheet"> -->
  </head>

  <body>
    <div class="container text-center">

      <h1>Quiz de phishing</h1>
      <p class="lead">Con esta herramienta puedes probar tus conocimientos sobre suplantación de identidad en correos electrónicos, redes sociales y mensajería instantánea</p>
      <h3>¿Qué deseas hacer?</h3>

      <div class="row">
        <div class="col-sm-6">
          <div class="card border-warning">
            <div class="card-body">
              <h4 class="card-title">Hacer el quiz de phishing</h4>
              <p class="card-text">Pon a prueba tu conocimiento sobre phishing y después compara los resultados con tus respuestas</p>
              <a href="quiz.php?reset=1" class="btn btn-warning">¡Hacer el quiz!</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border-info">
            <div class="card-body">
              <h4 class="card-title">Navegar todos los ejemplos</h4>
              <p class="card-text">Revisa sólo aquellos ejemplos que te interesan y consulta cuáles son reales, cuáles phishing y por qué.</p>
              <a href="list.php?reset=1" class="btn btn-info">Navegar ejemplos</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <p> También puedes consultar el código fuente en <a href="https://github.com/cguerrave/phishing-quiz" target="_blank">Github</a></p>
        </div>
      </div>




    </div> <!-- /container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
