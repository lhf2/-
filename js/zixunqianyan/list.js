$(function(){
	companyDynamicsImg();//公司动态banner
	companyDynamics(1);//公司动态
	industryTrendsImg();//行业动态banner
	industryTrends(1);//行业动态
});
//公司动态banner
function companyDynamicsImg(){
	var html = "";
	$.ajax({
	      type : "post",
	      url : "../menusContentService/newsIndex.htm",
	      data:{menuName:"公司动态"},
	      success : function(data) {
	    	var obj = JSON.parse(data);
	    	for(var i = 0;i<obj.length;i++){
	    		var val = obj[i];
	    		var imgsrc = getimgsrc(val.content)[i];//获取图片路径
	    		//如果图片不存在，取默认图片
	    		if(!imgsrc){
	    			imgsrc = "images/img ("+(3-i)+").png";
	    		}
	    		html+="<dl>";
	    		html+="<dt>";
	    		html+='<a href="newsDetail.html?id='+val.id+'"><img src="'+imgsrc+'" alt="" /></a>';
	    		html+="</dt>";
	    		html+="<dd>";
	    		var title = val.title;
	    		var subtitle = '';
	    		if(title.length>15){
	    			subtitle = title.substring(0,15)+"...";
	    		}else{
	    			subtitle = title;
	    		}
	    		html+='<a href="newsDetail.html?id='+val.id+'" title="'+title+'">'+subtitle+'</a>';
	    		html+="</dd>";
	    		html+="</dl>";
	    	}
	    	$("#companyDynamicsImg").html(html);
	     }}
	 );
}
//公司动态
function companyDynamics(page){
	var html = "";
	$.ajax({
	      type : "post",
	      url : "../menusContentService/newListData.htm",
	      data:{menuName:"公司动态",page:page},
	      success : function(data) {
	    	var obj = JSON.parse(data);
	    	var objs = JSON.parse(obj.dataList);
	    	var totalPage = obj.totalPage;//总页数
	    	var page = obj.page;//当前页
	    	for(var i = 0;i<objs.length;i++){
	    		var val = objs[i];
	    		html+="<li><a href='javascript:;'>";
	    		var title = val.title;
	    		var subtitle = '';
	    		if(title.length>20){
	    			subtitle = title.substring(0,20)+"...";
	    		}else{
	    			subtitle = title;
	    		}
	    		html+="<span class='text' title ="+title+"><a href='newsDetail.html?id="+val.id+"'>"+ subtitle +"</a></span>";
	    		html+="<span class='date'>"+ val.createTime.substring(0,10)+"</span>";
	    		html+="</a></li>";
	    	}
	    	$("#companyDynamics").append(html);
	    	//如果总页面大于当前页面
	    	if(totalPage>page){
	    		page = parseInt(page)+1;
	    		$("#companyDynamicsMore").html('<a href="javascript:;" onclick="companyDynamics('+page+')">更多动态 ∨</a>');
	    	}else{
	    		$("#companyDynamicsMore").html('');
	    	}
	     }}
	 );
}
//行业动态banner
function industryTrendsImg(){
	var html = "";
	$.ajax({
	      type : "post",
	      url : "../menusContentService/newsIndex.htm",
	      data:{menuName:"行业动态"},
	      success : function(data) {
	    	var obj = JSON.parse(data);
	    	for(var i = 0;i<obj.length;i++){
	    		var val = obj[i];
	    		var imgsrc = getimgsrc(val.content)[i];//获取图片路径
	    		//如果图片不存在，取默认图片
	    		if(!imgsrc){
	    			imgsrc = "images/img ("+(i+1)+").png";
	    		}
	    		html+="<dl>";
	    		html+="<dt>";
	    		html+='<a href="newsDetail.html?id='+val.id+'"><img src="'+imgsrc+'" alt="" /></a>';
	    		html+="</dt>";
	    		html+="<dd>";
	    		var title = val.title;
	    		var subtitle = '';
	    		if(title.length>15){
	    			subtitle = title.substring(0,15)+"...";
	    		}else{
	    			subtitle = title;
	    		}
	    		html+='<a href="newsDetail.html?id='+val.id+'" title="'+title+'">'+subtitle+'</a>';
	    		html+="</dd>";
	    		html+="</dl>";
	    	}
	    	$("#industryTrendsImg").html(html);
	     }}
	 );
}
//行业动态
function industryTrends(page){
	var html = "";
	$.ajax({
	      type : "post",
	      url : "../menusContentService/newListData.htm",
	      data:{menuName:"行业动态",page:page},
	      success : function(data) {
	    	var obj = JSON.parse(data);
	    	var objs = JSON.parse(obj.dataList);
	    	var totalPage = obj.totalPage;//总页数
	    	var page = obj.page;//当前页
	    	for(var i = 0;i<objs.length;i++){
	    		var val = objs[i];
	    		html+="<li><a href='javascript:;'>";
	    		var title = val.title;
	    		var subtitle = '';
	    		if(title.length>20){
	    			subtitle = title.substring(0,20)+"...";
	    		}else{
	    			subtitle = title;
	    		}
	    		html+="<span class='text' title ="+title+"><a href='newsDetail.html?id="+val.id+"'>"+ subtitle +"</a></span>";
	    		html+="<span class='date'>"+ val.createTime.substring(0,10)+"</span>";
	    		html+="</a></li>";
	    	}
	    	$("#industryTrends").append(html);
	    	//如果总页面大于当前页面
	    	if(totalPage>page){
	    		page = parseInt(page)+1;
	    		$("#industryTrendsMore").html('<a href="javascript:;" onclick="industryTrends('+page+')">更多动态 ∨</a>');
	    	}else{
	    		$("#industryTrendsMore").html('');
	    	}
	     }}
	 );
}
/** 
 * 获取html代码中图片地址 
 * @param htmlstr 
 * @returns {Array} 
 */  
function getimgsrc(htmlstr) {  
    var reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;  
    var arr = [];  
    while (tem = reg.exec(htmlstr)) {  
        arr.push(tem[2]);  
    }  
    return arr;  
}