jQuery(function($){
	var ajaxUrl	 	= "//" + location.host + "/wp-admin/admin-ajax.php";
    var page		= 1; // What page we are on.
    $(".dbp_pagination").on("click",function(){ 
        $(".dbp_pagination").attr("disabled",true); 
		$(".dbp_pagination").text("Loading...");  	 	
        var max_num_pages	= 	$(this).attr("data-max_num_pages"); 
        var found_posts		= 	$(this).attr("data-found_posts"); 
		var ppp				= 	$(this).attr("data-posts_per_page");  // Post per page
        $.post(ajaxUrl, {
            action:"ajax_publications_posts",       
			offset: (page * ppp),  
            ppp: ppp
        }).success(function(posts){
            page++;
            $(".dbio_article_publications").append(posts); 
            $(".dbp_pagination").attr("disabled",false);
			if(max_num_pages==page){
				$(".dbp_pagination").addClass("dbp_pagination_no_data");  
				$(".dbp_pagination").removeClass("dbp_pagination");  
				$(".dbp_pagination_no_data").text("No More Publications");  
			}else{
				$(".dbp_pagination").text("Load More");  
			} 
        });
   });    
});