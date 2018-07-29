
Parse.Cloud.job("oncePerSecond", function(request, status) {
  // the params passed through the start request
  const params = request.params;
  // Headers from the request that triggered the job
  const headers = request.headers;

  status.message("sucessfully ran the job");
});