using System;
using System.Linq;
using System.Web.UI;

namespace BlogEngine
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack && Session["UserId"] != null)
            {
                Session["UserId"] = null;
            }
        }

        protected void btnSend_Click(object sender, EventArgs e)
        {
            if (!Page.IsValid)
            {
                return;
            }

            doLogin();
        }

        private void doLogin()
        {
            BlogEngineEntities dataModel = new BlogEngineEntities();

            var result = (from blog in dataModel.blogs
                          where blog.admin_mail == txtEmail.Text.ToLower() &&
                                blog.password == txtPassword.Text
                          select new
                                {
                                    blog.id
                                }).ToList();

            if (result == null || result.Count == 0)
            {
                ClientScript.RegisterStartupScript(Page.GetType(), "Login", "<script>alert('Login ou senha incorretos.')</script>");
                return;
            }

            Session["UserId"] = result[0].id;
            Response.Redirect("BlogStartPage.aspx");
        }
    }
}