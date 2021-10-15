export const readFileAsText = (file) => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onabort = () => reject("file reading was aborted");
    fr.onerror = () => reject("file reading has failed");
    if (fr.readAsText) {
      fr.addEventListener(
        "load",
        function () {
          const string = this.resultString != null ? this.resultString : this.result;
          resolve(string);
        },
        false,
      );
      fr.readAsText(file);
    } else {
      reject("Failed to read file");
    }
  });
};
