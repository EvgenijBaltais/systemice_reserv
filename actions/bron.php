<?php
header("Access-Control-Allow-Origin: *");
// заявки в корп базу
$ded_login = '6000';
$ded_password = 'de123400000z';
	
function sendCurl($data,$ded_login,$ded_password ){
	if($curl = curl_init()){
	    curl_setopt($curl, CURLOPT_URL, 'https://crmvi.ru/knight/api/corp/bron');
	    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
	    curl_setopt($curl, CURLOPT_POST, true);
	    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	    $out = curl_exec($curl);
	    curl_close($curl);
	}
}

function sendCorpMail($data){
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";
	$headers .= 'From: =?utf-8?B?'.base64_encode($_POST['source']).'?= <info@' . $_POST['source'] . '>' . "\r\n";
	$headers .= 'Reply-To: =?utf-8?B?'.base64_encode($_POST['source']).'?= <info@' . $_POST['source'] . '>' . "\r\n";
	$headers .= 'X-Mailer: PHP/' . phpversion();

	$theme = 'Корп заявка. Отель:'.$data['hotel'];
	$email = 'maot-bron@mail.ru';
	
	$text  = 'Имя: ' . $data['clientname'] . "\n";
	$text .= 'Телефон: ' . $data['phone1'] . "\n";
	$text .= 'Эл. почта: ' . $data['email']. "\n";
	$text .= 'Отель: ' . $data['hotel_comment'] . "\n";
	$text .= 'Комментарий: ' . $data['other_comments'] . "\n";
	$text .= 'С сайта ' . $data['hotel'];
	
	return mail($email, $theme, $text, $headers);
}

if (isset($_POST['date_st']) && $_POST['date_st'] == '') $_POST['date_st'] = date("d.m.Y H:i:s");

if (isset($_POST['date_end']) && $_POST['date_end'] == '') $_POST['date_end'] = date("d.m.Y H:i:s");


if(isset($_POST['corp'])){

	//----------- отправка в корп базу
	$dataCorp['clientname'] = $_POST['name'];
	$dataCorp['phone1'] = $_POST['phone'];
	$dataCorp['email'] = $_POST['email'];
	$dataCorp['date_in'] = date('d.m.Y', strtotime($_POST['date_st']));
	$dataCorp['date_out'] = date('d.m.Y', strtotime($_POST['date_end']));
	if(isset($_POST['hotel']) && !empty($_POST['hotel'])){
		$dataCorp['hotel_comment'] = $_POST['hotel'];
	}else{
		$dataCorp['hotel_comment'] = $_POST['hotel_comment'];
	}
	$dataCorp['other_comments'] = $_POST['dopinfo'];
	$dataCorp['u'] = $_POST['u'];

	if(isset($_POST['knight_id'])) {

		$dataCorp['hotelid'] = $_POST['knight_id'];
	}

	if ($dataCorp['u'] == "70840598" || $dataCorp['email'] == "01215@gmail.com") {
		die();
	}

	sendCurl($dataCorp,$ded_login,$ded_password );
	if(sendCorpMail($dataCorp)){
		$answer = ['status'=>'success'];		
	}

}else{
	$data = [
		'hotel_name' => $_POST['hotel'],
		'uname' => $_POST['name'],
		'email' => $_POST['email'],
		'phone' => $_POST['phone'],
		'ucomment' => $_POST['text'],
		'u' => $_POST['u']
	];

	$params = '';			
	foreach ($data as $key => $value) {
		$params .= $key.'='.urlencode($value).'&';
	}
	// обрезаем последний знак & чисто для красоты, он ни на что не влияет
	$lenght = mb_strlen($params);
	$params = substr($params,0,$lenght-1);	
	$zayavka =  file_get_contents('https://'.$ded_login.':'.$ded_password.'@crmvi.ru/knight/api/bron/?'.$params);
	$answer = ['status'=>'error'];
	if(json_decode($zayavka)->id > 0){
		$answer = ['status'=>'success','id'=>json_decode($zayavka)->id];
	}
}
if($answer){
	echo json_encode($answer);die;
}else{
	echo 'Не переданы данные';die;
}
