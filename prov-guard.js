(function() {
    document.documentElement.style.visibility = 'hidden';

    function ridrejtoNëKycje() {
        window.location.href = '../index.html';
    }

    function verifikoSesionin() {
        var code = localStorage.getItem('user_auth_code');
        var fingerprint = localStorage.getItem('user_device_id');

        if (!code || !fingerprint) {
            ridrejtoNëKycje();
            return;
        }

        firebase.app().functions('europe-west1').httpsCallable('verifikoSesionServer')({ code: code, fingerprint: fingerprint })
            .then(function(result) {
                if (result.data && result.data.valid) {
                    document.documentElement.style.visibility = 'visible';
                } else {
                    ridrejtoNëKycje();
                }
            })
            .catch(function(error) {
                console.error('Gabim në verifikimin e sesionit:', error);
                ridrejtoNëKycje();
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', verifikoSesionin);
    } else {
        verifikoSesionin();
    }
})();