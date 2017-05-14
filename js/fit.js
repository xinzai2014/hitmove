var oA=new Audio();
oA.src=oggSound['sound50'];
var timer=null;
var i=0;
function toDou(i){
    return i<10?'0'+i:''+i;
}

$('#btn').toggle(function(){
    timer=setInterval(function(){
        oA.play();
        i++;
        $('#view-num').text(toDou(i));
        $('#btn').text('停止');
    },1000);
},function(){
    i=0;
    $('#view-num').text('00');
    clearInterval(timer);
    $('#btn').text('开始');
});



