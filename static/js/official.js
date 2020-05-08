this.addEventListener('message', function (e) {

    setTimeout(function () {
        this.postMessage("free")
    }, e.data);
}, false);