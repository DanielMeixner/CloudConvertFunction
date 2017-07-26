using System.Net;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{
    log.Info("C# HTTP trigger function processed a request.");

    // parse query parameter
    string convertid = req.GetQueryNameValuePairs()
        .FirstOrDefault(q => string.Compare(q.Key, "id", true) == 0)
        .Value;

        string convertUrl = req.GetQueryNameValuePairs()
        .FirstOrDefault(q => string.Compare(q.Key, "url", true) == 0)
        .Value;

 

    

    return convertid == null
        ? req.CreateResponse(HttpStatusCode.BadRequest, "Please pass a name on the query string or in the request body")
        : req.CreateResponse(HttpStatusCode.OK, "convertid: " + convertid + " url" + convertUrl);
}
