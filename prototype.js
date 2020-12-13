chrome.downloads.onCreated.addListener(function(item) {
	if(item.state == "in_progress"){
	chrome.downloads.pause(item.id);
	}
	if(item.totalBytes > 500000000){
		chrome.downloads.cancel(item.id);
	}
	else if(item.mime == "application/octet-stream" || item.mime == "application/zip"){
		chrome.downloads.cancel(item.id);
	}
	else{
		chrome.downloads.resume(item.id);
	}
	/* if(item.state == "completed" || item.state == "in_progress"){
		chrome.downloads.removeFile(item.id);
	}
	*/
	console.log("File Size: " + item.fileSize);
	console.log("Item start Time: " + item.startTime);
	console.log("Item end Time: " + item.endTime);
	console.log("Item MIME Type: " + item.mime);
});