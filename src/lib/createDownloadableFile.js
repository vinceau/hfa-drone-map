// Taken from: https://medium.com/@szpytfire/create-a-downloadable-file-using-javascript-typescript-c7d8bf798baa

export const createDownloadableFile = (data, filename, contentType) => {
  // IE 11
  if (navigator.msSaveBlob) {
    // Use IE11's APIs
    const blob = new Blob([data], {
      type: contentType,
    });
    navigator.msSaveBlob(blob, filename);
    return;
  }

  // Other browsers
  // Create a hidden anchor link
  const element = document.createElement("a");
  element.style.display = "none";

  // Attach the content to the anchor
  element.setAttribute("href", contentType + encodeURIComponent(data));
  element.setAttribute("download", filename);
  // Append to DOM and simulate click (this will trigger the download)
  document.body.appendChild(element);
  element.click();
  // Cleanup
  document.body.removeChild(element);
};
