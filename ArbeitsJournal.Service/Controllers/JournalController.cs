using System.Web.Http;

namespace ArbeitsJournal.Service.Controllers
{
    public class JournalController : ApiController
    {

        [HttpGet]
        public string GetHelloWorld() {
            return "Hello world from your server";
        }
    }
}
