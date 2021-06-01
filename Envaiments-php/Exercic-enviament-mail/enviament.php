<?php
$remitente = $_POST['email'];
$destinatario = 'info@llindisseny.com'; // en aquesta línia va el correu del destinatari, pot ser una compte de hotmail, yahoo, gmail, e 
$asunto = 'Consulta'; // aquí es pot modificar l’assumpte del correu 
if (!$_POST){

}else{
	 
    $cuerpo = "Nom: " . $_POST["Nom"] . "\r \n"; 
    $cuerpo .= "Cognoms: " . $_POST["Cognoms"] . "\r \n";
    $cuerpo .= "Adreça: " . $_POST["Adreça"] . "\r\n";
    $cuerpo .= "Telefon: " . $_POST["Telefon"] . "\r\n";
    $cuerpo .= "E-mail: " . $_POST["email"] . "\r \n";
    $cuerpo .= "Assumpte: " . $_POST["Assumpte"] . "\r\n";
    $cuerpo .= "Explicació del projecte: " . $_POST["projecte"] . "\r\n";
	//les línies de dalt defineixen el contingut del correu. Les paraules que estan dins de $ _POST [""] han de coincidir amb el "nom" de cada camp. 
	// Si s’afegueix un camp al formulari, s'ha d'afegir aquí. 

    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: \"".$_POST['Nom']." ".$_POST['Cognoms']."\" <".$remitente.">\n";

    mail($destinatario, $asunto, $cuerpo, $headers);
    
    include './thanks.php'; 
    //s'ha de crear un html que confirmi l'enviament 
?>