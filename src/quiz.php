<?php
session_start();
# session handling
if($_GET['reset']){
  unset($_SESSION['quiz']);
}
// $array_temp = $_SESSION['quiz'];
if (!isset($_SESSION['quiz'])){
  $_SESSION['quiz']=array();
  $directories = glob($somePath . 'examples/*' , GLOB_ONLYDIR);
  $counter = 1;
  foreach ($directories as $dir){
    $ini_array = parse_ini_file($dir."/config.ini");
    $_SESSION['quiz'][$counter]=array(
      "directory" => $dir,
      "response" => $ini_array['phishy'],
      "status" => 'grey'
    );
    $counter++;
  }
  shuffle($_SESSION['quiz']);
}

# Check if we have an answer sent and process it
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $res_sequence = $_POST['seq'];
    $res_dir = $_POST['dir'];
    $res_option = $_POST['option'];
    if ($res_option == $_SESSION['quiz'][$res_sequence]['response']){
      $_SESSION['quiz'][$res_sequence]['status'] = 'green';
    } else {
      $_SESSION['quiz'][$res_sequence]['status'] = 'red';
    }
}
# Check if there are non answered questions
$unanswered = 0;
$first_unanswered = 101;
$sequence_indicators = '';
foreach ($_SESSION['quiz'] as $current_sequence => $question){
  $current_sequence_po = $current_sequence + 1;
  $indicator_class = 'light';
  if ($question['status']=='green'){
    $indicator_class = 'success';
  } elseif ($question['status']=='red'){
    $indicator_class = 'danger';
  }
  $sequence_indicators .= '<span class="badge badge-'.$indicator_class.'">'.$current_sequence_po.'</span>  ';
  if ($question['status']=='grey'){
    if ($unanswered == 0){
      $first_unanswered = $current_sequence;
    }
    $unanswered++;
  }
}
if ($first_unanswered == 101){
  header('Location: '.'quiz_results.php');
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

      <h1>¿Real o Phishing?</h1>
<p class="lead">Selecciona si lo que ves abajo es real o un ataque de suplantación de identidad.</p>
<pre>
<?php
  // echo $res_option.'<br>';
  // echo $_SESSION['quiz'][$res_sequence]['response'].'<br>';
  // print_r($_SESSION['quiz'][$res_sequence]);
  //print_r($_SESSION['quiz']);
?>
</pre>

          <h4 style="text-align:center;margin-bottom:20px;">
            <?php echo $sequence_indicators; ?>
          </h4>

          <div class="row botones">
            <form id="questionform" method="POST" action="quiz.php">
              <input type="hidden" id="form_seq" name="seq" value="<?php echo $first_unanswered; ?>">
              <input type="hidden" id="form_dir" name="dir" value="<?php echo $_SESSION['quiz'][$first_unanswered]['directory']; ?>">
              <input type="hidden" id="form_option" name="option" value="">
            </form>
            <div class="col-6"><button type="button" class="btn btn-lg btn-success" onClick="sendAnswer(0);">Real</button></div>
            <div class="col-6"><button type="button" class="btn btn-lg btn-danger" onClick="sendAnswer(1);">Phishing</button></div>

          </div>

          <?php

            $dir = $_SESSION['quiz'][$first_unanswered]['directory'];
            // echo $dir.'<br>';
            $dir = str_replace("examples/","",$dir);
            // echo $dir.'<br>';
            $inidir = "examples/".$dir."/config.ini";
            // echo $inidir.'<br>';
            $frame_content = "examples/".$dir."/index.html";
            // echo $frame_content.'<br>';
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
                <iframe src="<?php echo $frame_content; ?>" name="iframe1" style="width:100%;height:100%;border:none;"></iframe>
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
                  <iframe src="<?php echo $frame_content; ?>" name="iframe1" style="width:100%;height:100%;border:none;"></iframe>
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
          ?>

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
