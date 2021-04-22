//ﾓｼﾞｭｰﾙ：module_slider
var module_slider = (function() {
    var sliderlist_item = document.querySelectorAll(".slider");
    var count = sliderlist_item.length;
    count = parseInt(count, 10)/2;
    console.log(count);
    
    //Keyframe
    var times = 100/count;
    times = Math.round(times * 10) / 10;
    console.log(times);
    var transX = 0;
    var slide_arr = [];
    
    var obj = {};
    obj["transform"] = 'translate3D(' + transX + '%, 0, 0)';
    obj["offset"] = 0;
    obj["easing"] = "ease";
    
    slide_arr.push(obj);
    
    for(var i = 1; i <= count; i++){
        var offset = (times*i);
            var obj = {};
            obj["transform"] = 'translate3D(' + transX + '%, 0, 0)';
            obj["offset"] = (offset-1)/100;
            slide_arr.push(obj);

            if(i == count){
                var obj = {};
                obj["transform"] = 'translate3D(' + -50 + '%, 0, 0)';
                obj["offset"] = 1;
                obj["easing"] = "ease";
                slide_arr.push(obj);
                //transX = (offset/2)*-1;
            }
            else{
                var obj = {};
                obj["transform"] = 'translate3D(' + (offset/2)*-1 + '%, 0, 0)';
                obj["offset"] = offset/100;
                obj["easing"] = "ease";
                slide_arr.push(obj);
                transX = (offset/2)*-1;
            }

    }
    
    console.log(slide_arr);
    
    //Timing property
    var slideTiming = {
      duration: count*4000,
      iterations: Infinity
    }

    document.querySelector('.slider_wrapper').animate(
        slide_arr,
        slideTiming
    )
    
    })();
