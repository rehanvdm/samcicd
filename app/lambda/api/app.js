
module.exports.handler = async (event, context) =>
{
    console.log( "Saying thank you at: " + new Date());
    let response = null;

    try
    {
       response = { statusCode: 200, body: 'Thank you, CICD is cool' };
    }
    catch (err)
    {
        console.error(err);
        response = { statusCode: 500, body: 'Oops! something went wrong' };
    }
    finally
    {
        return response;
    }
};