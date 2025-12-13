# Data Persistence Guide for Strapi Cloud

## Quick Reference

**How to keep new data without deleting:**

✅ **Local Development**:
- Database file: `.tmp/data.db` (SQLite) - persists between restarts
- Don't delete `.tmp/` directory to keep your data
- New entries added through admin panel are automatically saved
- Seed scripts only create missing entries, never overwrite existing ones

✅ **Deployment (Strapi Cloud)**:
- Database persists independently of deployments (managed PostgreSQL)
- All content, translations, and media files are preserved
- Seed scripts run on startup but only create missing entries
- Manual changes through admin panel are never overwritten

**Key Points**:
- ✅ New data added through admin panel → **Automatically preserved**
- ✅ Seed scripts → **Only create missing entries, never delete or overwrite**
- ✅ Database → **Persists across deployments**
- ✅ Media files → **Stored in cloud storage, persist across deployments**

## Overview

This guide explains how data persistence works on Strapi Cloud and how to ensure your data is preserved during deployments.

## How Data Persistence Works on Strapi Cloud

### Automatic Data Persistence

**Strapi Cloud automatically persists your data** between deployments. Here's how:

1. **Managed Database**: Strapi Cloud uses a managed PostgreSQL database that is **separate from your application code**
2. **Database Lifecycle**: The database persists independently of deployments
3. **No Data Loss**: Your content, translations, and media files are preserved across deployments

### What Gets Persisted

✅ **Persisted (Survives Deployments)**:
- All content entries (translations, custom content types)
- Media files (uploaded images, documents)
- User accounts and permissions
- Database schema and data
- Published and draft content

❌ **Not Persisted (Resets on Deploy)**:
- Environment variables (must be set in Strapi Cloud dashboard)
- Application code (deployed from your repository)
- Node modules (reinstalled on each deploy)

## Database Configuration

### Strapi Cloud Database

Strapi Cloud automatically configures a PostgreSQL database for your project. You don't need to configure it manually.

The database connection is handled via environment variables that Strapi Cloud sets automatically:
- `DATABASE_CLIENT=postgres`
- `DATABASE_URL` (connection string)
- Other database credentials

### Local Development Database

For local development, Strapi uses SQLite by default (`.tmp/data.db`). This file is:
- **Not committed to git** (in `.gitignore`)
- **Local only** - each developer has their own
- **Persists between restarts** - your data is kept when you restart the server
- **Can be deleted** - safe to remove for a fresh start (but you'll lose local data)

**To preserve data in local development**:
1. Don't delete the `.tmp/` directory
2. The database file (`.tmp/data.db`) contains all your local data
3. New entries added through admin panel are automatically saved
4. Seed scripts only create missing entries, never delete or overwrite

## Deployment Best Practices

### 1. Environment Variables

Set these in **Strapi Cloud Dashboard** → **Settings** → **Environment Variables**:

```env
# Required for Strapi Cloud
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret

# Optional - for custom configuration
NODE_ENV=production
```

**Important**: These are stored separately from your code and persist across deployments.

### 2. Content Types

Your content type schemas are defined in code (`src/api/*/content-types/*/schema.json`). When you:
- **Add a new content type**: Deploy the code, and Strapi will create the database tables
- **Modify a content type**: Strapi will migrate the database schema automatically
- **Delete a content type**: The database table remains, but the API endpoints are removed

### 3. Seed Data

The `bootstrap` function in `src/index.ts` automatically seeds translations on startup. This:
- ✅ **Only creates missing translations** - never overwrites existing data
- ✅ **Preserves manual changes** - any translations added or modified through the admin panel are kept
- ✅ **Never deletes existing data** - your data is safe
- ✅ **Runs on every deployment** - ensures all required translations exist
- ⚠️ **Does NOT update existing translations by default** - to preserve your manual changes

**Important**: The seed script is designed to be **non-destructive**. It will:
- Create new translation entries that don't exist
- Skip existing entries to preserve any manual modifications
- Never delete any data

If you need to update existing translations from the seed data, you can:
1. Manually update them through the admin panel
2. Or run the seed script with `updateExisting: true` option (not recommended for production)

### 4. Media Files

Media files uploaded through Strapi are stored in:
- **Strapi Cloud**: Managed cloud storage (persists across deployments)
- **Local**: `public/uploads/` directory (not persisted, use cloud storage for production)

## Removing Default Content Types

We've removed the default Strapi example content types:
- ❌ `article` - Blog articles
- ❌ `author` - Blog authors
- ❌ `category` - Blog categories
- ❌ `about` - About page content
- ❌ `global` - Global settings

**Only custom content types remain**:
- ✅ `translation` - Translation management

## Verifying Data Persistence

### After Deployment

1. **Check Content Manager**: Log into Strapi admin panel
2. **Verify Translations**: Go to Content Manager → Translation
3. **Check Media Library**: Verify uploaded files are still accessible
4. **Test API**: Make API calls to verify data is accessible

### If Data is Missing

1. **Check Strapi Cloud Logs**: Look for database connection errors
2. **Verify Environment Variables**: Ensure all required variables are set
3. **Check Bootstrap Logs**: Look for seed script execution logs
4. **Database Backup**: Strapi Cloud automatically backs up your database

## Migration Strategy

### When Adding New Content Types

1. **Develop Locally**: Create the content type schema
2. **Test Locally**: Add sample data and test
3. **Deploy to Strapi Cloud**: Push your code
4. **Strapi Auto-Migrates**: Database tables are created automatically
5. **Add Content**: Use the admin panel or API to add content

### When Modifying Content Types

1. **Update Schema**: Modify `schema.json` files
2. **Deploy**: Push changes to Strapi Cloud
3. **Strapi Auto-Migrates**: Database schema is updated automatically
4. **Existing Data**: Existing entries are preserved (if compatible)

### When Removing Content Types

1. **Remove Code**: Delete the content type folder from `src/api/`
2. **Deploy**: Push changes to Strapi Cloud
3. **API Removed**: Endpoints are no longer accessible
4. **Data Preserved**: Database table remains (can be cleaned up manually if needed)

## Backup and Recovery

### Automatic Backups

Strapi Cloud automatically:
- Creates daily database backups
- Retains backups for a configurable period
- Allows point-in-time recovery

### Manual Backup

To export your data:
1. Use Strapi's export feature (if available)
2. Use the API to export content programmatically
3. Use database tools to export directly (if you have access)

## Troubleshooting

### "Database connection failed"

- Check environment variables in Strapi Cloud dashboard
- Verify database is running (should be automatic on Strapi Cloud)
- Check Strapi Cloud status page

### "Content missing after deployment"

- Verify database connection is working
- Check bootstrap logs for errors
- Verify content types are properly defined
- Check if content was published (draft vs published)

### "Translations not loading"

- Check bootstrap logs for seed script execution
- Verify translation content type exists
- Check API endpoint is accessible
- Verify CORS settings allow your frontend

## Preserving New Data

### How to Keep New Data Safe

1. **Database Persistence**:
   - **Local Development**: SQLite database (`.tmp/data.db`) persists between restarts unless deleted
   - **Deployment**: Managed PostgreSQL database persists independently of deployments
   - **Never commit database files**: They're in `.gitignore` and should stay local

2. **Translation Data**:
   - New translations added through admin panel are **automatically preserved**
   - Seed script only creates missing entries, never overwrites existing ones
   - Manual changes are safe from being overwritten

3. **Content Entries**:
   - All content created through admin panel or API is stored in the database
   - Database persists across deployments
   - No data loss during code deployments

4. **Media Files**:
   - **Local**: Stored in `public/uploads/` (not committed to git)
   - **Deployment**: Stored in cloud storage (persists across deployments)

### Best Practices

✅ **DO**:
- Add new content through admin panel - it will persist
- Use the database for all data storage
- Keep `.tmp/` and `public/uploads/` in `.gitignore`
- Let seed scripts only create missing entries

❌ **DON'T**:
- Commit database files (`.tmp/data.db`)
- Commit uploaded media files
- Delete `.tmp/` directory unless you want a fresh start
- Modify seed scripts to delete data

## Summary

✅ **Your data is safe**: Strapi Cloud uses a managed database that persists independently  
✅ **Automatic migrations**: Schema changes are handled automatically  
✅ **Seed scripts are safe**: Bootstrap function only creates missing entries, never deletes or overwrites  
✅ **Manual changes preserved**: Any data added through admin panel is never overwritten  
✅ **Media files persist**: Uploaded files are stored in cloud storage  
✅ **Backups included**: Automatic daily backups are created  

**Key Takeaway**: On Strapi Cloud, your database and media files are separate from your application code and persist across all deployments. Only your code changes when you deploy. **New data added through the admin panel or API is automatically preserved and never deleted by seed scripts.**

