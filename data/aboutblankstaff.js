        window.onload = function() {
            function launchab() {
                const tab = window.open('about:blank', '_blank');
                const iframe = tab.document.createElement('iframe');
                const stl = iframe.style;
                stl.border = stl.outline = 'none';
                stl.width = '100vw';
                stl.height = '100vh';
                stl.position = 'fixed';
                stl.left = stl.right = stl.top = stl.bottom = '0';
                iframe.src = self.location;
                tab.document.body.appendChild(iframe);
		window.parent.window.location.replace(localStorage.getItem("panicurl") || 'https://wakeid2.wcpss.net/idp/AuthnEngine');

            }

            // Call the function when the entire page is fully loaded
            launchab();
        };
