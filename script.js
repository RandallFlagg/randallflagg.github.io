function loadScript(src) {
    return new Promise(function (resolve, reject) {
        if (document.querySelectorAll("script[src='" + src + "']").length === 0) {
            const script = document.createElement('script');
            script.onload = function () {
                resolve();
            };
            script.onerror = function () {
                reject();
            };
            script.src = src;
            document.head.appendChild(script);
        } else {
            console.warn(`The script "${src}" is already loaded`);
            resolve();
        }
    });
}