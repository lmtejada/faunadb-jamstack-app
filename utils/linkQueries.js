const GET_LINKS = `
    query{
        allLinks{
            data {
            name
            _id
            url
            description
            archived
            }
        }
    }
`;

module.exports = {
    GET_LINKS
}