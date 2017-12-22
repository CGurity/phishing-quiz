<?php
session_start();
$correct_answers = 0;
$total_answers = 0;
foreach ($_SESSION['quiz'] as $question){
  if ($question['status']=='green'){
    $correct_answers++;
  }
  $total_answers++;
}
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
    <div class="container">

      <h1>¿Real o Phishing?<br><br></h1>


      <div class="row botones">
        <div class="col-6"><h3>¡Acertaste <?php echo $correct_answers; ?> de <?php echo $total_answers; ?> preguntas!</h3></div>
        <div class="col-6"><a href="quiz.php?reset=1" type="button" class="btn btn-lg btn-info">< Volver a hacer el quiz</a></div>
      </div>
      <div class="card-columns">
<?php
      foreach ($_SESSION['quiz'] as $question){
        $border_class = 'border-success';
        $text_class = 'text-success';
        if ($question['status']=='red'){
          $border_class = 'border-danger';
          $text_class = 'text-danger';
        }
        $ini_array = parse_ini_file($question['directory']."/config.ini");
        if ($ini_array['title']){
          $card_title = $ini_array['title'];
        } else {
          $card_title = str_replace("examples/","",$question['directory']);
        }
        if ($ini_array['description']){
          $card_description = $ini_array['description'];
        } else {
          $card_description = "";
        }
        $card_image = "";
        if ($ini_array['image']){
          $card_image = '<img class="card-img-top" src="'.$question['directory'].'/image.png" alt="Card image cap">';
        }
        echo '<div class="card '.$border_class.' '.$text_class.'">

      <div class="card-body">'.$card_image.'
      <h4 class="card-title"><a class="'.$text_class.'" href="/example.php?example='.str_replace("examples/","",$question['directory']).'">'.$card_title.'</a></h4>
      <p class="card-text">'.$card_description.'</p>
      </div>
      </div>';
    }?>
  </div>




    </div> <!-- /container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
