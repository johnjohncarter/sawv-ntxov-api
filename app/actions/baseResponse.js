module.exports = {

    success: function(data) {
        if (data.constructor === String) {
            return {
                success: true,
                data: {
                    message: data
                }
            };
        }
        return {
            success: true,
            data: data
        };
    },

    error: function (message) {
        if (message.constructor === String) {
            return {
                success: false,
                error: {
                    message: message
                }
            };
        }
        return {
            success: false,
            error: message
        };
    }

};