/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #bnt_cadastro_ligartv */
    $(document).on("click", "#bnt_cadastro_ligartv", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_15").modal("toggle");  
    });
    
        /* button  #bnt_cadastro_desligartv */
    $(document).on("click", "#bnt_cadastro_desligartv", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_17").modal("toggle");  
    });
    
        /* button  #bnt_cadastro_aumetartv */
    $(document).on("click", "#bnt_cadastro_aumetartv", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_19").modal("toggle");  
    });
    
        /* button  #bnt_cadastro_diminuirrtv */
    $(document).on("click", "#bnt_cadastro_diminuirrtv", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_21").modal("toggle");  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
