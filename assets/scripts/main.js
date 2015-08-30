(function () {
    'use strict';

    var site = {
        init: function () {
            document.addEventListener('click', this.handleClickEvents);
        },

        handleClickEvents: function (e) {


            var target = e.target;
            var targetType =  target.tagName.toLowerCase();

            if (targetType === 'i') {
                target = target.parentNode;
            }

            if (targetType === 'a' && target.className.indexOf('ext-link') !== -1) {
                e.preventDefault();
                window.open(target.href);
            }

        }
    };

    site.init();

})();
