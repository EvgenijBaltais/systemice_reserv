<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

if (empty($_POST)) {
	die('Empty response');
}

if ($_POST['u'] == "70840598" || $_POST['email'] == "01215@gmail.com") {
   die();
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('phpmailer/src/Exception.php');
require_once('phpmailer/src/PHPMailer.php');
require_once('phpmailer/src/SMTP.php');

// заявки в корп базу
$ded_login = '6000';
$ded_password = 'de123400000z';

function sendCurl($data,$ded_login,$ded_password ){
	if($curl = curl_init()){
	    curl_setopt($curl, CURLOPT_URL, 'https://' . $ded_login . ':' . $ded_password . '@crmvi.ru/corp/remotezakaz.php');
	    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
	    curl_setopt($curl, CURLOPT_POST, true);
	    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	    $out = curl_exec($curl);
	    curl_close($curl);
	}
}


function sendCorpMail($arr){

	$mail = new PHPMailer(true);
//	$mail->SMTPDebug = 1;
	$mail->isSMTP(); 

	$mail->Host = 'smtp.yandex.ru';

	$mail->SMTPAuth = true;

	$mail->Username = 'order@systemice.ru';
	$mail->Password = '87v3948j3-';
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;
	$mail->CharSet = "utf-8";

	$mail->setFrom('order@systemice.ru', 'Заявка с systemice.ru');
	$mail->addAddress('maot-bron@mail.ru');
	$mail->isHTML(true);

	$mail->Subject = 'Письмо с формы: ' . $arr['form_name_text'];

	if (isset($arr['name']) && $arr['name'] != null) {
		$mail->Body   = '<p style = "color: #000; font-size: 18px; line-height: 24px;">Имя: <span style = "font-weight: bold;">' . $arr['name'] . '</span></p>';
	}
	if (isset($arr['phone']) && $arr['phone'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Телефон: <span style = "font-weight: bold;">' . $arr['phone'] . '</span></p>';
	}
	if (isset($arr['email']) && $arr['email'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Email: <span style = "font-weight: bold;">' . $arr['email'] . '</span></p>';
	}
	if (isset($arr['date']) && $arr['date'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">На дату: <span style = "font-weight: bold;">' . $arr['date'] . '</span></p>';
	}
	if (isset($arr['company']) && $arr['company'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Компания: <span style = "font-weight: bold;">' . $arr['company'] . '</span></p>';
	}
	if (isset($arr['guestsNumber']) && $arr['guestsNumber'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Количество гостей: <span style = "font-weight: bold;">' . $arr['guestsNumber'] . '</span></p>';
	}
	if (isset($arr['men']) && $arr['men'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Мужчин: <span style = "font-weight: bold;">' . $arr['men'] . '</span></p>';
	}
	if (isset($arr['women']) && $arr['women'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Женщин: <span style = "font-weight: bold;">' . $arr['women'] . '</span></p>';
	}
	if (isset($arr['format']) && $arr['format'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Формат мероприятия: <span style = "font-weight: bold;">' . $arr['format'] . '</span></p>';
	}
	if (isset($arr['location']) && $arr['location'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Место проведения: <span style = "font-weight: bold;">' . $arr['location'] . '</span></p>';
	}
	if (isset($arr['link']) && $arr['link'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Ссылка: <span style = "font-weight: bold;">' . $arr['link'] . '</span></p>';
	}
	if (isset($arr['dateAdvance']) && $arr['dateAdvance'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Дата предварительная? <span style = "font-weight: bold;">' . $arr['dateAdvance'] . '</span></p>';
	}
	if (isset($arr['comment']) && $arr['comment'] != null) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Комментарий: <span style = "font-weight: bold;">' . $arr['comment'] . '</span></p>';
	}

	if(strlen($_FILES["file"]["name"])){

		$file_name = $_FILES['file']['name'];
		$file_ext=strtolower(end(explode('.', $file_name)));

		move_uploaded_file($_FILES['file']["tmp_name"], "uploads/" . $file_name);
		$mail->addAttachment("uploads/" . $file_name);

		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Файл: <span style = "font-weight: bold;">' . $file_name . '</span></p>';
	}

	return $mail->send();
}


	//----------- отправка в корп базу
	$dataCorp['clientname'] = $_POST['name'];
	$dataCorp['phone1'] = $_POST['phone'];
	$dataCorp['email'] = $_POST['email'];
	$dataCorp['date_in'] = date('d.m.Y', strtotime($_POST['date_st']));
	$dataCorp['date_out'] = date('d.m.Y', strtotime($_POST['date_end']));
	
	$dataCorp['hotel_comment'] = 'Systemice (systemice.ru)';
	$dataCorp['other_comments'] = $_POST['dopinfo'];
	$dataCorp['knight_id'] = $_POST['hotel'];
	
	$dataCorp['u'] = $_POST['u'];

	sendCurl($dataCorp,$ded_login,$ded_password );

if(sendCorpMail($_POST)) {
	echo 'Успешная отправка на почту';die;
}

echo 'Ошибка отправки на почту';die;
