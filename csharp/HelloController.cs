using Microsoft.AspNetCore.Mvc;

namespace project.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloController : ControllerBase
{

    private readonly ILogger<HelloController> _logger;

    public HelloController(ILogger<HelloController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetHelloFromCSharp")]
    public string Get()
    {
        return "Hello from C#!";
    }
}

