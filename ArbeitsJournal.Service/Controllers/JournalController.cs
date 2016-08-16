using System.Web.Http;

namespace ArbeitsJournal.Service.Controllers
{
    public class JournalController : ApiController
    {

        [HttpGet]
        public IHttpActionResult GetHelloWorld() {

            return Ok("Hello world from your server");
        }
        
        [HttpPost]
        public IHttpActionResult SetHelloWorld(string helloText) {

            return Ok("Hello world from your server" + helloText);
        }
    }
}
