const { UPDATE_LINK } = require('../utils/linkQueries'),
    formattedResponse = require('../utils/formattedResponse'),
    sendQuery = require('../utils/sendQuery');

exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') {
        return formattedResponse(405, { err: 'Method not supported' });
    }

    const { _id: id, name, url, description, archived } = JSON.parse(event.body),
        variables = { id, name, url, description, archived };

    try {
        const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables);

        return formattedResponse(200, updatedLink);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
}
