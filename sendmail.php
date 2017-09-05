<?php
header('Access-Control-Allow-Origin: *');

if ($_POST['key'] === '991fddae4d9664e12fc6b788a70413da') {
    if (!empty($_POST['form__name']) && (!empty($_POST['form__email']) || !empty($_POST['form__phone']))) {

        $name = $_POST['form__name'];
        $email = !empty($_POST['form__email']) ? $_POST['form__email'] : 'не указан';
        $phone = !empty($_POST['form__phone']) ? $_POST['form__phone'] : 'не указан';
        $message = !empty($_POST['form__message']) ? $_POST['form__message'] : 'без сообщения';
        $pretences = !empty($_POST['form__pretence']) ? $_POST['form__pretence'] : array('не заполнены');
        $pretences_processed = '';

        foreach ($pretences as $item) {
            $pretences_processed .= '<li>' . $item . '</li>';
        }

        $message = '
        <html>
            <body>
                <h3>Пользователь заполнил форму обратной связи!</h3>
                <p>
                  <b>Имя: </b>' . $name . '<br>
                  <b>Телефон: </b>' . $phone . '<br>
                  <b>Почта/соцсеть: ' . $email . '</b><br>
                  <b>Сообщение: ' . $message . '</b><br>
                </p>

                <h4>Согласен с требованиями:</h4>
                <ul>' . $pretences_processed . '</ul>
            </body>
        </html>';

        $to = 'jacobxblue@gmail.com';
        $subject = 'Заполнена форма на странице Коллцентры';

        $headers = "Content-type: text/html; charset=UTF-8\r\n";
        $headers .= "From: raspberry-pi <info@188.242.147.89>\r\n";

        if (mail($to, $subject, $message, $headers)) {
            exit();
        } else {
            exit(json_encode(['error' => 'Ошибка отправки']));
        }

    } else {
        exit();
    }

} else {
    exit();
}

