/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .lampadas_temperatura */
    $(document).on("click", ".lampadas_temperatura", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #sidebar_lampadas */
    $(document).on("click", "#sidebar_lampadas", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #sidebar_lampadas */
    $(document).on("click", "#sidebar_lampadas", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sid_lampadas"));  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
