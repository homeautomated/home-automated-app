/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_cadastro_ligarar */
    
    
        /* button  #btn_cadastro_desligarar */
    
    
        /* button  #btn_cadastro_ligarar */
    $(document).on("click", "#btn_cadastro_ligarar", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_14").modal("toggle");  
    });
    
        /* button  #btn_cadastro_desligarar */
    $(document).on("click", "#btn_cadastro_desligarar", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_16").modal("toggle");  
    });
    
        /* button  #btn_cadastro_aumentarar */
    $(document).on("click", "#btn_cadastro_aumentarar", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_18").modal("toggle");  
    });
    
        /* button  #btn_cadastro_diminuirar */
    $(document).on("click", "#btn_cadastro_diminuirar", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_21").modal("toggle");  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
