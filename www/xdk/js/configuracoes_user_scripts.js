/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
        /* button  #confconexao */
    $(document).on("click", "#confconexao", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#porraip").modal("toggle");  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
