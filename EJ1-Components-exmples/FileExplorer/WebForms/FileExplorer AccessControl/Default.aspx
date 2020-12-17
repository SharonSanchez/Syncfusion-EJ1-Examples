﻿<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ComboBox._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
       <ej:FileExplorer ID="fexplore" runat="server" Height="100%" Width="100%" AjaxAction="Default.aspx/FileActionDefault" IsResponsive="True" MinWidth="250px" MinHeight="400px" Path="~/FileBrowser/">
                   <AjaxSettings>
                        <Download Url="downloadFile.ashx{0}" />
                        <Upload Url="uploadFiles.ashx{0}" />
                   </AjaxSettings>
           <UploadBoxSettings 
                AllowMultipleFile="false" 
                AutoUpload="true" 
                MaxFileSize="10737418240"/>
        </ej:FileExplorer>
</asp:Content>
