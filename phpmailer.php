<?php
  // подключается загрузчик библиотеки
  require 'PHPMailer/PHPMailerAutoload.php';

  /*** конфигурация ***/

  $SMTP_MAIL = 'sharafiev.webmoney@gmail.com';
  $SMTP_PASSWORD = 'zjmjkeqe';

  $MAIL_TO = 'info@lc-studio.ru';
  $SUBJECT = 'Заявка клиента lc-studio';
  $SENDER = 'Веб-студия lc-studio';

  // datetime
  date_default_timezone_set( 'Europe/Moscow' );
  $date = date('m/d/Y h:i:s a', time());

  // получение json
  $data = json_decode($_POST['jsonData']);

  // отправка сообщения
  $mail = new PHPMailer;
  $mail->isSMTP(); // задать smtp
  $mail->SMTPDebug = 0; // вывод ошибок. 0-без ошибок, 1- ошибки клиенту, 2-ошибки клиенту и серверу.
  $mail->Debugoutput = 'html'; // тип вывода ошибок, html

  $mail->Host = 'smtp.gmail.com'; // адрес smpt сервера
  $mail->Port = 587; // порт smpt сервера
  $mail->SMTPSecure = 'tls';  // шифрование smpt сервера
  $mail->SMTPAuth = true; // авторизация включена

  $mail->Username = $SMTP_MAIL; // имя пользователя email
  $mail->Password = $SMTP_PASSWORD; // пароль пользователя email


  $mail->setFrom($MAIL_TO, $SENDER); // от кого приходит сообщение. Первый аргумент почта, второй заголовок от кого
  $mail->addAddress($MAIL_TO, $SENDER); //  сообщение владельцу



  $mail->Subject = $SUBJECT; // тема сообщения
  $mail->Body = '
  <html>
  <head>
    <meta charset="utf-8"/>
    <title>'.$SUBJECT.'</title>
    <style>
      ul {
        list-style: none;
      }

      ul > li {
        font-size: 14px;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <ul>
      <h2>Заявка №'.  uniqid() .'</h2>
      <li>Имя: '. $data->name . '</li>
      <li>Телефон: '. $data->phone . '</li>
      <li>Дата и время: '. $date . '</li>
    </ul>
  </body>
  </html>
  ';
  $mail->IsHTML(true); // передавать html
  $mail->CharSet="UTF-8"; // кодировка сообщения
  $mail->send();
  echo $image_url;

?>