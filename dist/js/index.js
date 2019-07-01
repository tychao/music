var $=window.Zepto;
var root=window.player;
var index=0;
var $scope=$(document.body);
var songList;
var controlmanager;

function bindClick(){
     $scope.find(".next-btn").on("click",function(){
	// 	if(index==songList.length-1){
	// 		index=0
	// 	}else{
    //        index++;
	// 	}
		
	// 	root.render(songList[index]);
    var index=controlmanager.next();
	$scope.trigger("player:change",index)	
})
	 $scope.find(".prev-btn").on("click",function(){
	// 	if(index==0){
	// 		index=songList.length-1
	// 	}else{
    //        index--;
	// 	}
		
	// 	root.render(songList[index]);
var index=controlmanager.prev();
	$scope.trigger("player:change",index)
	 })
}
$scope.on("player:change",function(event,index){
	root.render(songList[index])
})

function getData(url){
	$.ajax({
		type:"GET",
		url:url,
		success:successFn
		
	})
}
function successFn(data){
	songList=data;
 $scope.trigger("player:change",0)
 bindClick();
 controlmanager=new root.controlManager(data.length);
}
getData("/mock/data.json")
