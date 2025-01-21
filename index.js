exports.handler = async (event) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: "<html><body><img src='buzz.jpg'/></body></html>"
    };
};
