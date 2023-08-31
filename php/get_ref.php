<?php
//поиск utm меток
$ref = '';
if(!empty($_SERVER['HTTP_REFERER'])){
    $ref .= $_SERVER['HTTP_REFERER'];
}
if(strpos($ref, 'utm') === false){
    $queryUrl = '';
    if(
        isset($_SERVER['QUERY_STRING'])
        && !empty($_SERVER['QUERY_STRING'])
        && strpos($_SERVER['QUERY_STRING'], 'utm') !== false
    ) {
        $queryUrl = str_replace('/?', '', $_SERVER['QUERY_STRING']);
        $queryUrl = str_replace('?', '', $queryUrl);
    } else if(
        isset($_SERVER['REQUEST_URI'])
        && !empty($_SERVER['REQUEST_URI'])
        && strpos($_SERVER['REQUEST_URI'], 'utm') !== false
    ){
        $queryUrl = str_replace('/?', '', $_SERVER['REQUEST_URI']);
        $queryUrl = str_replace('?', '', $queryUrl);
    }
    if(!empty($queryUrl)) {
        if(empty($ref)){
            $ref = $queryUrl;
        } else {
            $ref .= '?'.$queryUrl;
        }
    }
    $ref = str_replace('//', '', $ref);
}

?>

<div style="display: none" id="data-hotel-id" data-hotel-id="13632" data-ref="<?=$ref?>"></div>