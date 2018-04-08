$(function(){
	offlinePropagation();//线下传播
});
//线下传播
function offlinePropagation(){
	var html = "";
	$.ajax({
	      type : "post",
	      url : "../menusContentService/menuListData.htm",
	      data:{menuName:"线下传播"},
	      success : function(data) {
	    	var obj = JSON.parse(data);
	    	for(var i = 0;i<obj.length;i++){
	    		var val = obj[i];
	    		html+='<a href="offlinePropagationDetail.html?id='+val.id+'">';
	    		if((i+1)==obj.length){
	    			html+='<span class="span01 last01">';
	    		}else{
	    			html+='<span class="span01">';
	    		}
	    		html+=val.title;
	    		html+='</span>';
	    		html+='</a>';
	    	}
	    	$("#offlinePropagationHtml").html(html);
	     }}
	 );
}