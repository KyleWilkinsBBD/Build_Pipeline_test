exports.handler = async (event) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: "<html><body><h1>Hello World</h1><img src='buzz.jpg'/></body></html>"
    };
};
