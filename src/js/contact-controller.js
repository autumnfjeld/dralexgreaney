(function (window) {


    /**
     *
     * @param templatePage - a pug template compiled into js function
     * @param data
     * @constructor
     */
    function ContactController() {

    }

    /**
     * Initialize view bindings
     */
    ContactController.prototype.initView = function () {
        var $contactForm = $('#contact-form');
        $contactForm.submit(function (event) {
            event.preventDefault();
            var formData = {};
            $contactForm.serializeArray().map(
                function (x) {
                    formData[x.name] = x.value;
                });
            var validData = this._validateForm(formData);
            if (validData) {
                this._awsPostForm(formData);
            } else {
                this._showMessage('missingInput')
            }
        }.bind(this));
    };

    /**
     *
     * @param {jQuery form} formData
     * @return {false|Object}
     * @private
     */
    ContactController.prototype._validateForm = function (formData) {
        if (!formData.email || !formData.name || !formData.message) {
            return false;
        } else {
            return formData;
        }
    };

    /**
     * Ajax POST request to AWS Gateway API
     * @param {Object} formData
     * @private
     */
    ContactController.prototype._awsPostForm = function (formData) {
        var controller = this;
        // TODO Consider spinner if server response is slow
        $.ajax({
            type: "POST",
            cache: false,
            // url: "https://z6xpli9nr0.execute-api.us-west-2.amazonaws.com/prod/makeitwork",
            url: " https://br94wjlmdh.execute-api.us-west-2.amazonaws.com/prod/contactform",
            data: JSON.stringify(formData),
            contentType: "application/json"
        }).done(function () {
            controller._showMessage('success');
        }).fail(function (res) {
            console.warn('FAIL: ', res);
            controller._showMessage('error');
        });
    };

    /**
     * Provide user feedback on form status
     * @param {string} msgType
     * @private
     */
    ContactController.prototype._showMessage = function (msgType) {
        var messageMap = {
            'missingInput': 'Please complete all three form fields.',
            'success': 'Your message was successfully sent.',
            'error': 'Oops. There was a problem sending your message, please try again.'
        };

        $('.message').text(messageMap[msgType]);
        $('.msg-box').show('slow');         // Could also do fade in.....
        // TODO timeout to remove message
        if (msgType === 'success') {
            $('#contact-form')[0].reset();
        }

    };


    // Export to window
    window.app = window.app || {};
    window.app.ContactController = ContactController;

})(window);