const { GET_LINKS } = require('../utils/linkQueries'),
    formattedResponse = require('../utils/formattedResponse'),
    sendQuery = require('../utils/sendQuery');

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_LINKS),
            data = res.allLinks.data;

        return formattedResponse(200, data);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
}