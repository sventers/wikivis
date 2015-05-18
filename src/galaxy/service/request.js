import Promise from 'bluebird';

export default request;

function request(url, options) {
  if (!options) options = {};

  return new Promise(download);

  function download(resolve, reject) {
    var req = new XMLHttpRequest();
    if (options.responseType) {
      req.responseType = options.responseType;
    }

    if (typeof options.progress === 'function') {
      req.addEventListener("progress", updateProgress, false);
    }

    req.addEventListener("load", transferComplete, false);
    req.addEventListener("error", transferFailed, false);
    req.addEventListener("abort", transferCanceled, false);

    req.open('GET', url);
    req.send(null);

    function updateProgress(e) {
      if (e.lengthComputable) {
        options.progress({
          loaded: e.loaded,
          total: e.total,
          percent: e.loaded / e.total
        });
      }
    }

    function transferComplete() {
      if (req.status !== 200) {
        reject(`Unexpected status code ${req.status} when calling ${url}`);
        return;
      }

      resolve(req.response);
    }

    function transferFailed() {
      reject(`Failed to download ${url}`);
    }

    function transferCanceled() {
      reject(`Cancelled download of ${url}`);
    }
  };
}