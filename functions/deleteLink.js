const { DELETE_LINK } = require('../utils/linkQueries'),
    formattedResponse = require('../utils/formattedResponse'),
    sendQuery = require('../utils/sendQuery');

exports.handler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        return formattedResponse(405, { err: 'Method not supported' });
    }

    const { id } = JSON.parse(event.body),
        variables = { id };

    try {
        const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables);

        return formattedResponse(200, deletedLink);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
}
