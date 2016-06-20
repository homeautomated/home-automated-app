/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #sidebar_tv */
    
    
        /* button  #sidebar_tv */
    $(document).on("click", "#sidebar_tv", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sid_tv"));  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
