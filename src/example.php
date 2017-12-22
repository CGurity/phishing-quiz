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

      <h1>Ejemplo de Phishing</h1>
      <p class="lead">Consulta si el siguiente ejemplo es realista o un intento de suplantación de identidad y por qué</p>

      <?php
      if($_GET['example']){
        $dir = $_GET['example'];
        $inidir = "examples/".$dir."/config.ini";
        $frame = "examples/".$dir."/index.html";
        // echo $inidir;
        if (parse_ini_file($inidir)){
          // echo "<b>Tiene ini file</b><br>";
          $dirconfig = parse_ini_file($inidir);
          // echo '<pre>';
          // print_r($dirconfig);
          // echo '</pre>';
          $platform = $dirconfig['platform'];
          $type = $dirconfig['type'];
          $phishy = $dirconfig['phishy'];
          // echo 'Ejemplo para mostrarse en '.$platform;
?>
<div class="row botones">
  <?php
  if ($phishy == True){
  ?>
  <div class="col-4"><h2 class="text-danger">¡¡¡Phishing!!!</h2></div>
  <div class="col-4"><button type="button" class="btn btn-lg btn-danger" onClick="toggleIndicators()">¿Porqué?</button></div>
  <div class="col-4"><a href="list.php" type="button" class="btn btn-lg btn-info">< Volver</a></div>
<?php } else {
  ?>
  <div class="col-8"><h2 class="text-info">¡¡¡Real!!!</h2></div>
  <div class="col-4"><a href="list.php" type="button" class="btn btn-lg btn-info">< Volver</a></div>
  <?php
}
?>
</div>
<?php


          if ($platform == 'desktop'){
          ?>
    <div id="browser-wrapper">
    <div id="browser">
          <div class="row browser-mockup-row">
            <div class="col-md-1 hidden-md-down"><img src="/img/controles.png" class="controles"></div>
            <div class="col-xs-8 col-md-11 col-lg-10 col-11">
              <div class="url">
                <img class="globos tt" data-placement="top" src="/img/ssl-indicator-<?php echo $dirconfig['ssl']; ?>.png" style="max-height:1.7em;" data-toggle="popover" data-content="<?php echo $dirconfig['ssl_popover']; ?>">
                <span id="url-bar" class="tt" data-toggle="popover" data-content="<?php echo $dirconfig['url_popover']; ?>" ><?php echo $dirconfig['url']; ?></span>
              </div>
            </div>
            <div class="col-1"><div class="hamburguer-wrapper"><img src="/img/hamburguer.png" class="hamburguer"></div></div>
          </div>
          <div class="row">
            <div class="col-12 html-content tt" data-content="<?php echo $dirconfig['frame_popover']; ?>">
            <!-- <iframe src="/home/cg/websites/paginasiete_index/index-2.html" style="width:100%;height:100%;border:none;"></iframe> -->
            <iframe src="<?php echo $frame; ?>" name="iframe1" style="width:100%;height:100%;border:none;"></iframe>
          </div>
          </div>
    </div>
    </div>

          <?php }
          elseif ($platform == 'mobile'){

          ?>

<div class="marvel-device nexus5">
    <div class="top-bar"></div>
    <div class="sleep"></div>
    <div class="volume"></div>
    <div class="camera"></div>
    <div class="screen">
      <?php
        if ($type == 'website'){
       ?>
      <div id="browser-wrapper">
      <div id="browser">
            <div class="row browser-mockup-row">
              <div class="col-xs-8 col-md-11 col-lg-10 col-11"><div class="url"><img class="globos tt" src="/img/ssl-indicator-mobile-<?php echo $dirconfig['ssl']; ?>.png" style="max-height:1.7em;" data-placement="left" data-toggle="popover" data-content="<?php echo $dirconfig['ssl_popover']; ?>">
                <?php if ($dirconfig['ssl'] == 'green'){ ?><span class="https_green">https://</span><?php } ?>
<?php if ($dirconfig['ssl'] == 'red'){ ?><span class="https_red">https</span><span class="https_grey">://</span><?php } ?>
<?php if ($dirconfig['ssl'] == 'grey'){ ?><span class="https_grey">https://</span><?php } ?><span class="tt"  data-toggle="popover" data-placement="right" data-content="<?php echo $dirconfig['url_popover']; ?>"><?php echo $dirconfig['url']; ?></span></div></div>
              <div class="col-1"><div class="hamburguer-wrapper"><img src="/img/hamburguer.png" class="hamburguer"></div></div>
            </div>
            <div class="row">
              <div class="col-12 html-content tt"  data-toggle="popover" data-content="<?php echo $dirconfig['frame_popover']; ?>">
        <?php
        }
        ?>
              <!-- <iframe src="/home/cg/websites/paginasiete_index/index-2.html" style="width:100%;height:100%;border:none;"></iframe> -->
              <iframe src="<?php echo $frame; ?>" name="iframe1" style="width:100%;height:100%;border:none;"></iframe>
              <?php
                if ($type == 'website'){
               ?>
            </div>
            </div>
      </div>
      </div>

      <?php
      }
      ?>
    </div>
</div>


          <?php
          }
        }
      } else {
        echo 'Por favor elige un ejemplo en <a href="/list.php">el listado</a> o accede al <a href="/quiz.php">quiz</a>';
      }

      ?>





    </div> <!-- /container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
