using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace signin.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {
    private readonly IConfiguration _config;

  }
}
