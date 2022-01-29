function polling() {
  console.log("polling");
  setTimeout(polling, 1000 * 1);
}

chrome.webRequest.onBeforeSendHeaders.addListener((details) => {
    const headers = details.requestHeaders;

    console.log((details.url, details.url.includes("google.com")));

    if (details.url.match(/google.com/gmi)) {
      headers?.push({
        name: "x-api-key",
        value: "looullzlzlzzz"
      });
    }

    return { requestHeaders: headers };

  },
  {urls: ['<all_urls>']},
  [ 'blocking', 'requestHeaders', 'extraHeaders']
);

polling();
