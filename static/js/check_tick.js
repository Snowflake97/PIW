function check() {
        this.postMessage("check");
        setTimeout("check()", 500);
}

this.addEventListener('message', check(), false);