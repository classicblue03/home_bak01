<?php
    $servername = 'localhost';
    $username   = 'moonjong2';
    $password   = 'anstjswhd0105';
    $dataname   = 'moonjong2';

    $conn = mysqli_connect($servername, $username, $password, $dataname);
    mysqli_set_charset($conn, 'utf8');

    if( !$conn ){
        die('데이터 베이스 서버 접속 실패!!!');
    }

    $irum    = $_POST['irum'];
    $email   = $_POST['email'];
    $inter   = $_POST['inter'];
    $message = $_POST['message'];

    //테이블에 정보 입력
    $sql = "insert into contact(name, email, food, 	message)  value ('$irum', '$email', '$inter', '$message')";
    mysqli_multi_query($conn, $sql); //테이블에 데이터를 입력 쿼리실행


    echo $irum."<br>".$email."<br>".$inter."<br>".$message."<i>php 응답 내용</i>"; //응답

    mysqli_close($conn); //데이터베이스 닫기

?>
