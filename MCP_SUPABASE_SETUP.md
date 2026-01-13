# MCP Supabase Setup Guide

## ✅ Installation Complete

The Supabase MCP server has been successfully installed and configured for Cursor IDE.

## 📦 Installed Packages

- **@supabase/mcp-server-supabase** (v0.6.1) - Installed globally
- **@supabase/supabase-js** - Added to your project dependencies

## ⚙️ Configuration

The MCP server has been configured in:
```
C:\Users\Sasa\AppData\Roaming\Cursor\User\globalStorage\mcp.json
```

## 🔑 Next Steps: Configure Your Supabase Access Token

To complete the setup, you need to add your Supabase Personal Access Token (PAT):

1. **Generate a Personal Access Token:**
   - Go to your [Supabase Dashboard](https://supabase.com/dashboard)
   - Navigate to **Project Settings** > **API**
   - Create a new Personal Access Token
   - Copy the token

2. **Add the Token to Configuration:**
   - Open the MCP configuration file:
     ```
     C:\Users\Sasa\AppData\Roaming\Cursor\User\globalStorage\mcp.json
     ```
   - Replace the empty `SUPABASE_ACCESS_TOKEN` value with your token:
     ```json
     {
       "mcpServers": {
         "supabase": {
           "command": "npx",
           "args": [
             "-y",
             "@supabase/mcp-server-supabase"
           ],
           "env": {
             "SUPABASE_ACCESS_TOKEN": "your-token-here"
           }
         }
       }
     }
     ```

3. **Optional: Configure Project Scope (Recommended)**
   
   For better security, you can scope the MCP server to a specific project:
   ```json
   {
     "mcpServers": {
       "supabase": {
         "command": "npx",
         "args": [
           "-y",
           "@supabase/mcp-server-supabase",
           "--project-ref=your-project-ref"
         ],
         "env": {
           "SUPABASE_ACCESS_TOKEN": "your-token-here"
         }
       }
     }
   }
   ```
   
   Find your project reference ID in **Project Settings** > **General** > **Project ID**

4. **Optional: Enable Read-Only Mode (Recommended for Production)**
   
   To restrict the server to read-only operations:
   ```json
   {
     "mcpServers": {
       "supabase": {
         "command": "npx",
         "args": [
           "-y",
           "@supabase/mcp-server-supabase",
           "--read-only"
         ],
         "env": {
           "SUPABASE_ACCESS_TOKEN": "your-token-here"
         }
       }
     }
   }
   ```

## 🔄 Restart Cursor

After updating the configuration:
1. Save the `mcp.json` file
2. Restart Cursor IDE completely
3. The MCP server should now be available in Cursor

## ✅ Verify Installation

To test if the MCP server is working:
```bash
npx -y @supabase/mcp-server-supabase
```

If configured correctly, it should connect (you may see connection messages).

## 🛠️ Available Features

The Supabase MCP server provides access to:
- **Database**: Query tables, execute SQL, manage migrations
- **Edge Functions**: List, get, and deploy edge functions
- **Storage**: Manage storage buckets and configuration
- **Project Management**: List projects, get project details
- **Documentation**: Search Supabase docs
- **Logs & Debugging**: Get project logs and advisors

## 📚 Resources

- [Supabase MCP Documentation](https://supabase.com/docs/guides/getting-started/mcp)
- [GitHub Repository](https://github.com/supabase-community/supabase-mcp)
- [MCP Protocol Documentation](https://modelcontextprotocol.io/)

## ⚠️ Security Best Practices

1. **Use Read-Only Mode** when connecting to production data
2. **Scope to Specific Projects** to limit access
3. **Don't Share Tokens** - Keep your PAT secure
4. **Use Development Projects** for testing MCP features
5. **Review Tool Calls** - Always review what the AI is trying to do before executing

## 🐛 Troubleshooting

### "Cannot find module" Error
```bash
npm cache clean --force
npx clear-npx-cache
```

### Server Not Connecting
- Verify your access token is correct
- Check that Cursor has been restarted
- Ensure the configuration file JSON is valid

### Permission Errors
- Verify your PAT has the necessary permissions
- Check that you're using the correct project reference
