chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.get(["apiKey"], (result)=>{
        if(!result.apiKey){
            chrome.tabs.create({url: "options.html"})
        }
    }) 
})