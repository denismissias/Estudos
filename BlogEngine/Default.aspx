<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="BlogEngine.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>BlogEngine - Gerenciador de Blogs</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <h1>BlogEngine - Gerenciador de Blogs</h1>

        Bem vindo ao gerenciador de blogs.
        <br />
        Faça o seu login nos campos abaixo ou, crie o seu blog <a href="NewBlog.aspx">aqui</a>.
        <br />

        E-Mail
        <br />
        <asp:TextBox runat="server" ID="txtEmail" Columns="100" MaxLength="100"></asp:TextBox>
        <br />
        <asp:RequiredFieldValidator runat="server" ID="rfvLogin" ErrorMessage="É necessário informar um e-mail." Display="Dynamic" ControlToValidate="txtEmail"></asp:RequiredFieldValidator>
        <br />

        Senha
        <br />
        <asp:TextBox runat="server" ID="txtPassword" Columns="10" MaxLength="10" TextMode="Password"></asp:TextBox>
        <br />
        <asp:RequiredFieldValidator runat="server" ID="rfvPassword" ErrorMessage="É necessário informar a senha." Display="Dynamic" ControlToValidate="txtPassword"></asp:RequiredFieldValidator>
        <br />

        <asp:Button runat="server" ID="btnSend" Text="Enviar" OnClick="btnSend_Click" />
    </div>
    </form>
</body>
</html>
