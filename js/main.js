(function(){
    
   var app={
       generator:function(){
           this.myfunction();
           this.abdetRezult();
       },
       myfunction:function(){
        $('#incris-radius').on('click',$.proxy(this.incrisRadius,this)); 
        $('#redius-radius').on('click',$.proxy(this.rediusRadius,this)); 
        $('#backgraund').on('change',$.proxy(this.bgColorr,this));
       $('#border').on('change',$.proxy(this.borderColor,this)); 

       },
        create:$('.create'),
        maxRadius:20,
        minRadius:0,
       codeText:$('#code-rezult'),
       incrisRadius:function(){
           var create1=this.create.css('border-radius'),
          step=$('#steep').val(),
               rezult=parseInt(create1)+parseInt(step);
        if(rezult>this.maxRadius){
            rezult=this.maxRadius;
             $('#incris-radius').addClass('disabled');
        }
        if(rezult>this.minRadius){
           $('#redius-radius').removeClass('disabled');
        }
                       this.create.css({
                         "border-radius":rezult 
                        });
       
        this.abdetRezult();
       },
       rediusRadius:function(){
           
        var create1=this.create.css('border-radius'),
          step=$('#steep').val(),
               rezult=parseInt(create1)-parseInt(step);
         if(rezult<this.minRadius){
             rezult=this.minRadius;
             $('#redius-radius').addClass('disabled');
         }
          if(rezult<this.maxRadius){
           $('#incris-radius').removeClass('disabled');
        }
                       this.create.css({
                         "border-radius":rezult 
                        });
         this.abdetRezult();
        
                            },
         bgColorr:function(){
                 var color='#'+$('#backgraund').val();
               
       this.create.css({
            "background-color":color
                        });
         this.abdetRezult();
            },
           borderColor:function(){
                    var borColor='#'+$('#border').val();
       this.create.css({
                         "border-color":borColor
                        });
         this.abdetRezult();
               },
          abdetRezult:function(){
        var bgColor=this.create.css('background-color'),
            bordColor=this.create.css('border-color'),
            borrDadius=this.create.css('border-radius');
        this.codeText.text(
            'background-color:' + bgColor +",\n"+"border-color:"+bordColor+",\n"+'-moz-border-radius:'+borrDadius+",\n"+'border-radius:'+borrDadius
        );
              
    }
   }
       
    
   
      
    app.generator();
    
    
    
       }());
    
    
    
    
    
//    var incrisRadius = $('#incris-radius'),
//      rediusRadius = $('#redius-radius'),
//        create=$('.create');
//    var maxRadius=20,
//            minRadius=0,
//        bgColor=$('#backgraund'),
//        borderColor=$('#border'),
//        codeText=$('#code-rezult');
//    incrisRadius.on('click',function(){
//        var create1=create.css('border-radius'),
//          step=$('#steep').val(),
//               rezult=parseInt(create1)+parseInt(step);
//       
//        if(rezult>maxRadius){
//            rezult=maxRadius;
//            $(this).addClass('disabled');
//        }
//        if(rezult>minRadius){
//           rediusRadius.removeClass('disabled');
//        }
//                        $('.create').css({
//                         "border-radius":rezult 
//                        });
//       
//        abdetRezult();
//        
//        
//    });
//     rediusRadius.on('click',function(){
//        var create1=create.css('border-radius'),
//          step=$('#steep').val(),
//               rezult=parseInt(create1)-parseInt(step);
//         if(rezult<minRadius){
//             rezult=minRadius;
//             $(this).addClass('disabled');
//         }
//          if(rezult<maxRadius){
//           incrisRadius.removeClass('disabled');
//        }
//                        $('.create').css({
//                         "border-radius":rezult 
//                        });
//         abdetRezult();
//        
//    });
//    bgColor.on('change',function(){
//        var color='#'+$(this).val();
//       create.css({
//                         "background-color":color
//                        });
//         abdetRezult();
//            
//    });
//      borderColor.on('change',function(){
//        var borColor='#'+$(this).val();
//       create.css({
//                         "border-color":borColor
//                        });
//         abdetRezult();
//            
//    });
//    var abdetRezult=function(){
//        var bgColor=create.css('background-color'),
//            bordColor=create.css('border-color'),
//            borrDadius=create.css('border-radius');
//        codeText.text(
//            'background-color:' + bgColor +",\n"+"border-color:"+bordColor+",\n"+'-moz-border-radius:'+borrDadius+",\n"+'border-radius:'+borrDadius
//        );
//    }
//   abdetRezult();

