<?php

header('Access-Control-Allow-Origin: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('phpmailer/src/Exception.php');
require_once('phpmailer/src/PHPMailer.php');
require_once('phpmailer/src/SMTP.php');

$mail = new PHPMailer(true);
$mail->SMTPDebug = 2;
$mail->isSMTP(); 

$mail->Host = 'smtp.yandex.ru';

$mail->SMTPAuth = true;

$mail->Username = 'newyear-03@yandex.ru';
$mail->Password = 'qafnaf_rexzji-_6hedsu';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;  
$mail->CharSet = "utf-8";

$mail->setFrom('newyear-03@yandex.ru', 'Конгресс-отель «Ареал»');


$mail->addAddress('delivery-test@r777.ru');
$mail->addAddress('daria.t@corphotel.ru');

	$comment .= "<p style = 'color: #000; font-size: 22px; line-height: 30px;'><b>Заявка на бронирование</b></p>";



if (isset($_POST['phone'])) {

	$comment .= "<b>Телефон:</b> " . $_POST['phone'] .= "<br>";
}

if (isset($_POST['email'])) {

	$comment .= "<b>Email:</b> " . $_POST['email'] .= "<br>";
}

if (isset($_POST['date_st'])) {

	$comment .= "<b>Дата заезда:</b> " . $_POST['date_st'] .= "<br>";
}

if (isset($_POST['date_end'])) {

	$comment .= "<b>Дата выезда:</b> " . $_POST['date_end'] .= "<br>";
}

if (isset($_POST['dopinfo'])) {

	$comment .= $_POST['dopinfo'] .= "<br>";
}


$mail->isHTML(true);

$mail->Subject = 'Проживание в конгресс-отеле Ареал 24-28 апреля 2022';

	$mail->Body    = '<p style = "color: #000; font-size: 22px; line-height: 30px;">' . $comment . '</p>';


if ($mail->send()) {

	var_dump("Письмо отправлено!");
}

else {

	var_dump("Ошибка отправки!");
	var_dump("Ошибка " . $mail->ErrorInfo);
}

?>

