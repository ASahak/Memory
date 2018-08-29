
$(document).ready(function(){
    var arr=["img/img_1.jpg", "img/img_2.jpg", "img/img_3.jpg", "img/img_4.jpg", "img/img_5.jpg", "img/img_6.jpg", "img/img_7.jpg", "img/img_8.jpg"];
    var zang = [];
    var jam = 45;
        $("#text").text(jam);
    function name(){
        if(jam > 0){
            jam--;
        $("#text").text(jam);
        }
        else{   
            $("#text").text("0");
            $(".abs").css({"display":"block", "background":"rgba(0,0,0,0.5)"})
            setTimeout(function(){
                window.location.reload();
            }, 1000);
        }
    }  
    setInterval(name, 1000);
    var shuffle = function(array){
        var m = array.length, t, i;
        while(m){
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
    arr = shuffle(arr);
    var count = 0;
    var du = 0;
    var reload = 0;
    $("#one").click(function(){
        
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 2){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#seven").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            
            $(".col1").css({"visibility":" visible"});
            $(".col7").css({"visibility":" visible"});
            $("#nk1").attr("src", arr[0]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
           
        }
        du =1;
        $(".front").children($("#img").attr("src", arr[0]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
           
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    
    })
    $("#two").click(function(){
       $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 4){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#five").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col2").css({"visibility":" visible"})
            $(".col5").css({"visibility":" visible"})
            $("#nk2").attr("src", arr[4]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =3;
        $(".front").children($("#img1").attr("src", arr[4]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#three").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 6){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#tensix").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col3").css({"visibility":" visible"})
            $(".col16").css({"visibility":" visible"})
            $("#nk3").attr("src", arr[7]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =5;
        $(".front").children($("#img2").attr("src", arr[7]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#for").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 8){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#tenfor").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col4").css({"visibility":" visible"})
            $(".col14").css({"visibility":" visible"})
            $("#nk4").attr("src", arr[5]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =7;
        $(".front").children($("#img3").attr("src", arr[5]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#five").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du ==3){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#two").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col5").css({"visibility":" visible"})
            $(".col2").css({"visibility":" visible"})
            $("#nk2").attr("src", arr[4]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =4;
        $(".front").children($("#img4").attr("src", arr[4]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#six").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 12){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#twelf").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col6").css({"visibility":" visible"})
            $(".col12").css({"visibility":" visible"})
            $("#nk6").attr("src", arr[3]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =11;
        $(".front").children($("#img5").attr("src", arr[3]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#seven").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            if(du ==1){   
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
                $("#one").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
                $(".col1").css({"visibility":" visible"})
            $(".col7").css({"visibility":" visible"})
                 $("#nk1").attr("src", arr[0]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
            }
        }
        du =2;
        $(".front").children($("#img6").attr("src", arr[0]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#eight").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 16){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#elf").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col8").css({"visibility":" visible"})
            $(".col11").css({"visibility":" visible"})
           $("#nk7").attr("src", arr[2]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =15;
        $(".front").children($("#img7").attr("src", arr[2]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#nine").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 14){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#tenfive").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col9").css({"visibility":" visible"})
            $(".col15").css({"visibility":" visible"})
            
            $("#nk8").attr("src", arr[6]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =13;
        $(".front").children($("#img8").attr("src", arr[6]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#ten").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 10){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#tenthree").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col10").css({"visibility":" visible"})
            $(".col13").css({"visibility":" visible"})
            
            $("#nk5").attr("src", arr[1]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =9;
        $(".front").children($("#img9").attr("src", arr[1]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#elf").click(function(){
        $(this).addClass("has");
       count++;
        if(count == 2){
            
       if(du == 15){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
           $("#eight").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
           $(".col11").css({"visibility":" visible"})
            $(".col8").css({"visibility":" visible"})
           
            $("#nk7").attr("src", arr[2]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =16;
        $(".front").children($("#img10").attr("src", arr[2]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#twelf").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 11){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#six").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col12").css({"visibility":" visible"})
            $(".col6").css({"visibility":" visible"})
            
            $("#nk6").attr("src", arr[3]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =12;
        $(".front").children($("#img11").attr("src", arr[3]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#tenthree").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 9){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#ten").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col13").css({"visibility":" visible"})
            $(".col10").css({"visibility":" visible"})
            
            $("#nk5").attr("src", arr[1]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =10;
        $(".front").children($("#img12").attr("src", arr[1]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#tenfor").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 7){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#for").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col14").css({"visibility":" visible"})
            $(".col4").css({"visibility":" visible"})
            
            $("#nk4").attr("src", arr[5]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =8;
        $(".front").children($("#img13").attr("src", arr[5]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#tenfive").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 13){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#nine").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col15").css({"visibility":" visible"})
            $(".col9").css({"visibility":" visible"})
            
            $("#nk8").attr("src", arr[6]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =14;
        $(".front").children($("#img14").attr("src", arr[6]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
    $("#tensix").click(function(){
        $(this).addClass("has");
        count++;
        if(count == 2){
            
        if(du == 5){
            $(this).css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $("#three").css({ "transform":"scale(0.6,0.6)", "z-index":"999999", "transition":"all 0.4s"});
            $(".col16").css({"visibility":" visible"})
            $(".col3").css({"visibility":" visible"})
             $("#nk3").attr("src", arr[7]);
            reload++;
            if(reload == 8){
                setTimeout(function(){
                window.location.reload();
            }, 2000);
            }
        }
        }
        du =6;
        $(".front").children($("#img15").attr("src", arr[7]));
        
        if(count == 3){
            if($(".main").children().children().hasClass("has")){
                $(".has").children($(".front")).css({"-webkit-transform":"rotateY(0deg)"})
                $(".has").children($(".back")).css({"-webkit-transform":"rotateY(-90deg)"})
                count =1;
            }
        }
      $(this).children($(".front")).css({"-webkit-transform":"rotateY(-90deg)"})
        $(this).children($(".back")).css({"-webkit-transform":"rotateY(0deg)"})
    })
})