using Microsoft.Extensions.Options;
using MRPC;
using Replicate;
using Replicate.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Routes {
    [ReplicateType]
    [ReplicateRoute(Route = "api/mrpc")]
    public class MRPCInterface : ReplicateWebRPC {
        [FromDI] public MRPCClient client;

        public MRPCInterface(IServiceProvider services) : base(services) { }

        [ReplicateRPC]
        public Task<List<MRPCResponse>> Call(MRPCRequest request) {
            if (request == null) throw new HTTPError("Null request");
            request.id = client.GetNextId();
            request.src = client.UUID;
            return client.Call(request);
        }
    }
}
