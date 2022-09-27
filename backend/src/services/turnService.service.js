module.exports = class {
    async createUser() {
        let response;

        try {
            response = {
                msg: 'Testing funcionality',
                status: 200,
            };
            return response;
        } catch (error) {
            response = {
                msg: error,
            };
        }
    }
};