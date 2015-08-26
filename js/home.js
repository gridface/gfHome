function pauseHomePageVideo()
{
    var videoIframe =  document.getElementById("powerBIYouTubeVideo");

    if(videoIframe){
        videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
}

function sendVideoTelemetry(){
	MscomCustomEvent("wcs.cid", "power-bi-video-opened");
}


$(function(){

	$("#myModal").on('click', function (e)
	{
	  if(e.target.className === "modal fade in"){
	  	pauseHomePageVideo();
	  }
	});

  $('#modal-button').on('click', function(){
    var iframe = $('#powerBIYouTubeVideo');
    if (iframe.attr('src') === '') {
      iframe.attr('src', '//go.microsoft.com/fwlink/?LinkID=620741');
    }
  });
})




