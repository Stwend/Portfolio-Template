
function call_php_insert(code,args)
{  
    var request =  (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');  // XMLHttpRequest instance
  
    request.onload = function() {
            document.write(request.responseText);
    }
    request.open("GET", "php/phpfunctions.php?f=" + code + "&args=" + args, false);
    request.send();
}

function calc_contentgrid()
{
    var num = Math.round((document.body.clientWidth-250)/363);
    document.documentElement.style.setProperty('--col_num_Content', num);
}


function get_header(hlitem)
{
    call_php_insert("get_header",hlitem);
}

function get_footer()
{
    call_php_insert("get_footer","");
    document.documentElement.style.setProperty('--contentHeight',document.body.scrollHeight-100);
}

function get_repos()
{
    call_php_insert("get_repos","");
 
}