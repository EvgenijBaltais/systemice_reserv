<?php

class Actioner {

    public function sendRequest() {

        $to = ""; // поменять на свой электронный адрес
        $from = $_POST['email'];
        $subject = "Заполнена контактная форма с ".$_SERVER['HTTP_REFERER'];
        $message = "Имя: ".$_POST['name']."<br/>Email: ".$from."<br/>IP: ".$_SERVER['REMOTE_ADDR']."";

        $this->sendEmail( $from, $to, $subject, $message, $_FILES['f8-file']);
        
    }

    function sendEmail( $from, $to, $subj, $text, $files=array())
    {
        $un        = strtoupper(uniqid(time()));
        $head      = "From: $from\n";
        $head     .= "Subject: $subj\n";
        $head     .= "X-Mailer: BKNPro-mail Tool\n";
        $head     .= "Reply-To: $from\n";
        $head     .= "Mime-Version: 1.0\n";
        $head     .= "Content-Type:multipart/mixed;";
        $head     .= "boundary=\"----------".$un."\"\n\n";
        $zag       = "------------".$un."\nContent-Type:text/html;\n";
        $zag      .= "Content-Transfer-Encoding: 8bit\n\n$text\n\n";
        foreach($files as $key=>$filename){
            $name = $files['name'];

            if (filesize($filename)==0) continue;
            $f         = fopen($filename,"rb");
            $zag      .= "------------".$un."\n";
            $zag      .= "Content-Type: application/octet-stream;";
            $zag      .= "name=\"".basename($filename)."\"\n";
            $zag      .= "Content-Transfer-Encoding:base64\n";
            $zag      .= "Content-Disposition:attachment;";
            $zag      .= "filename=\"".$name."\"\n\n";
            $zag      .= chunk_split(base64_encode(fread($f,filesize($filename))))."\n";
            fclose($f);
        }
        if (!@mail("$to", "$subj", $zag, $head))
            return 0;
        else
            return 1;
    }

    public function doAction() {
        if (isset($_REQUEST["action"]) && !empty($_REQUEST["action"])):
            foreach ($_REQUEST as $key=>$value) {
                if (gettype($_REQUEST[$key])=="array") {
                    foreach ($_REQUEST[$key] as $key2=>$value2) {
                        $_REQUEST[$key][$key2] = htmlspecialchars($value2,ENT_NOQUOTES);
                    }
                } else {
                    $_REQUEST[$key] = htmlspecialchars($value,ENT_NOQUOTES);
                    $_REQUEST[$key]  = str_replace("'","\'",$_REQUEST[$key]);
                }
            }
            $action = $_REQUEST["action"];
            $this->$action();
        endif;
    }

}

$actioner = new Actioner();
$actioner->doAction();