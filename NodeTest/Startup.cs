using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NodeTest.Startup))]
namespace NodeTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
