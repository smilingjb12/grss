using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace GRSS.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            RegisterStyleBundles(bundles);
            RegisterScriptBundles(bundles);
        }

        private static void RegisterStyleBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/bootstrap")
                .Include("~/Content/bootstrap.css")
                .Include("~/Content/ui-bootstrap-csp.css"));

            bundles.Add(new StyleBundle("~/bundles/app/vendor/css")
                .Include("~/Content/angular-loading-bar.css"));

            bundles.Add(new StyleBundle("~/bundles/app/user/css").Include(
                "~/Content/site.css",
                "~/Content/sidebar.css"));
        }

        private static void RegisterScriptBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/app/vendor/js").Include(
                "~/Scripts/jquery-1.10.2.js",
                "~/Scripts/bootstrap.js",
                "~/Scripts/angular.js",
                "~/Scripts/angular-ui-router.js",
                "~/Scripts/angular-resource.js",
                "~/Scripts/angular-ui/ui-bootstrap.js",
                "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                "~/Scripts/angular-cookies.js",
                "~/Scripts/angular-loading-bar.js",
                "~/Scripts/angular-animate.js"));


            bundles.Add(new ScriptBundle("~/bundles/app/user/js")
                .Include("~/App/app.js")
                .Include("~/App/constants.js")
                .Include("~/App/routeConfig.js")
                .IncludeDirectory("~/App/directives", "*.js", searchSubdirectories: true)
                .IncludeDirectory("~/App/services", "*.js", searchSubdirectories: true)
                .IncludeDirectory("~/App/controllers", "*.js", searchSubdirectories: true));
        }
    }
}
