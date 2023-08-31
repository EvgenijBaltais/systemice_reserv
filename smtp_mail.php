<?php
$smtp['HOST'] = preg_replace('/www\./i', '', $_SERVER['HTTP_HOST']);
$smtp['CHARSET'] = 'windows-1251';
/*
$smtp['SMTP_SERVER'] = 'smtp.mail.ru';
$smtp['SMTP_PORT'] = '25';
$smtp['SMTP_USERNAME'] = 'maot2013@mail.ru';
$smtp['SMTP_PASSWORD'] = 'vhQcfb6k2';
*/
$smtp['SMTP_SERVER'] = 'mail.checkstatus.ru';
$smtp['SMTP_PORT'] = '25';
$smtp['SMTP_USERNAME'] = 'info@checkstatus.ru';
$smtp['SMTP_PASSWORD'] = 'USiroDLQ';

function smtp_mail($to, $subject, $message, $smtp)
{
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=' . $smtp['CHARSET'] . "\r\n";
	$headers .= 'From: =?' . $smtp['CHARSET'] . '?B?' . base64_encode($smtp['HOST']) . '?= <'.$smtp['SMTP_USERNAME'].'>' . "\r\n";
	$headers .= 'Reply-To: =?' . $smtp['CHARSET'] . '?B?' . base64_encode($smtp['HOST']) . '?= <'.$smtp['SMTP_USERNAME'].'>' . "\r\n";
	$headers .= 'X-Mailer: PHP/' . phpversion();

	if (preg_match("/From:.*?[A-Za-z0-9\._%-]+\@[A-Za-z0-9\._%-]+.*/", $headers, $froms))
	{
		preg_match("/[A-Za-z0-9\._%-]+\@[A-Za-z0-9\._%-]+/", $froms[0], $fromarr);
		$from = $fromarr[0];
	}

	$cp = fsockopen($smtp['SMTP_SERVER'], $smtp['SMTP_PORT'], $errno, $errstr, 1);
	if (!$cp) return "Failed to even make a connection";
	$res=fgets($cp,256);
	if(substr($res,0,3) != "220") return "Failed to connect";
	
	fputs($cp, "EHLO ".$smtp['SMTP_SERVER']."\r\n");
	$res="";
	while($str = fgets($cp,515)) 
	{
		$res .= $str;
		if(substr($str,3,1) == " ") { break; }
	}
	if(substr($res,0,3) != "250") return "Failed to Introduce";
	
	fputs($cp, "AUTH LOGIN\r\n");
	$res=fgets($cp,256);
	if(substr($res,0,3) != "334") return "Failed to Initiate Authentication";
	
	fputs($cp, base64_encode($smtp['SMTP_USERNAME'])."\r\n");
	$res=fgets($cp,256);
	if(substr($res,0,3) != "334") return "Failed to Provide Username for Authentication";
	
	fputs($cp, base64_encode($smtp['SMTP_PASSWORD'])."\r\n");
	$res=fgets($cp,256);
	if(substr($res,0,3) != "235") return "Failed to Authenticate";
	
	fputs($cp, "MAIL FROM: <".$smtp['SMTP_USERNAME'].">\r\n");
	$res=fgets($cp,256);
	if(substr($res,0,3) != "250") return "MAIL FROM failed";
	
	fputs($cp, "RCPT TO: <".$to.">\r\n");
	$res=fgets($cp,256);
	if(substr($res,0,3) != "250") return "RCPT TO failed";
	
	fputs($cp, "DATA\r\n");
	$res=fgets($cp,256);
	if(substr($res,0,3) != "354") return "DATA failed";
	
	fputs($cp, "To: ".$to."\r\nSubject: ".$subject."\r\n".$headers."\r\n\r\n".$message."\r\n.\r\n");
	$res=fgets($cp,256);
	if(substr($res,0,3) != "250") return "Message Body Failed";
	
	fputs($cp,"QUIT\r\n");
	$res=fgets($cp,256);
	if(substr($res,0,3) != "221") return "QUIT failed";
	
	return true;
}
?>