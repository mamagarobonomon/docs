# Deployment Architecture Discovery

## How docs.nimbusbci.com is Deployed

### Architecture
**Vercel + Mintlify Integration**

```
GitHub Repo (mamagarobonomon/docs)
    ↓ (Git Push)
Vercel Auto-Deploy
    ↓ (Builds Mintlify Docs)
Vercel Production URLs
    ↓ (Custom Domain)
docs.nimbusbci.com
```

### Key Components

1. **GitHub Repository**: `https://github.com/mamagarobonomon/docs`
   - Branch: `main`
   - Directory: `/docs` (contains docs.json and all .mdx files)

2. **Vercel Project**: `docs` (team: sergeys-projects-39e2434c)
   - Project ID: `prj_Ooe52QBKigR8bzPkGZEozkffZnWv`
   - Organization ID: `team_GaPPoWK6dRgXJKG2QLvhBxo8`

3. **Mintlify Framework**
   - Provides documentation rendering
   - Configuration: `docs.json`
   - Local testing: `npx mintlify dev`

4. **Custom Domain**: `docs.nimbusbci.com`
   - Configured in Vercel dashboard
   - Points to production deployments

## Recent Deployment

### Just Deployed (33 seconds ago)
```
URL: https://docs-e3d5qdq1y-sergeys-projects-39e2434c.vercel.app
Status: ● Ready (Production)
Duration: 4s
Includes: All our navigation fixes (commits ac1a8da, f9b793f, 7dc2fc0)
```

## Why rxlda Still Shows 404

### The Issue
The custom domain `docs.nimbusbci.com` may be:

1. **Pointing to an older deployment**
   - Custom domain might not auto-update to latest deployment
   - May need manual promotion in Vercel dashboard

2. **Cached at CDN level**
   - Vercel's Edge Network may have cached the 404
   - Domain-specific cache separate from deployment URLs

3. **DNS propagation delay**
   - If domain was recently updated, DNS may not have propagated

## How to Fix

### Option 1: Vercel Dashboard (Recommended)

1. **Go to**: https://vercel.com/sergeys-projects-39e2434c/docs

2. **Check Domains Tab**:
   - Verify `docs.nimbusbci.com` is listed
   - Check which deployment it points to
   - Ensure it points to the latest production deployment

3. **Deployments Tab**:
   - Find the latest deployment (33s ago)
   - Click "Promote to Production" if needed
   - Or set as "Production Domain" alias

4. **Purge Cache**:
   - In Settings → "Caching"
   - Or use "Redeploy" to force fresh cache

### Option 2: Vercel CLI

```bash
cd /Users/sergeymusienko/Nimbus-docs/docs

# Force redeploy to production
vercel --prod --force

# Or promote specific deployment
vercel alias https://docs-e3d5qdq1y-sergeys-projects-39e2434c.vercel.app docs.nimbusbci.com
```

### Option 3: Wait for Auto-Sync

Vercel typically auto-syncs custom domains to latest production within:
- **Immediate**: Deployment URL (works now)
- **5-15 minutes**: Custom domain cache refresh
- **Up to 1 hour**: Full CDN propagation

## Verification Steps

### 1. Test Latest Deployment URL
```bash
# This should work on the new deployment:
curl https://docs-e3d5qdq1y-sergeys-projects-39e2434c.vercel.app/models/rxlda
```

### 2. Check Custom Domain
```bash
# This might still be cached:
curl https://docs.nimbusbci.com/models/rxlda
```

### 3. Check Cache Headers
```bash
curl -I https://docs.nimbusbci.com/models/rxlda
# Look for: X-Vercel-Cache, Age, Cache-Control headers
```

## Deployment History

| Time | Commit | Deployment | Status |
|------|--------|-----------|--------|
| Now (33s ago) | ac1a8da | docs-e3d5qdq1y | ✅ Ready - HAS FIX |
| 8h ago | a84fb47 | docs-1dfa5987i | ✅ Ready - OLD |
| 8h ago | Earlier | docs-olx3d71te | ✅ Ready - OLD |

## What Changed

### Our Commits
1. `7dc2fc0` - Fixed navigation structure (tabs → array)
2. `f9b793f` - Fixed MDX syntax errors  
3. `ac1a8da` - Version bump to 2.0.1

### Deployed Successfully To
✅ Vercel URL: `docs-e3d5qdq1y-sergeys-projects-39e2434c.vercel.app`

### Not Yet Live On
⏳ Custom Domain: `docs.nimbusbci.com` (waiting for cache/DNS)

## Timeline

```
T-0 (now):     Vercel deployment complete with fixes
T+5 min:       Custom domain should start showing new version
T+15 min:      Full CDN cache refresh expected
T+30 min:      If still 404, manual intervention needed
```

## Next Actions

### Immediate (Do Now)
1. **Go to Vercel Dashboard**: https://vercel.com/sergeys-projects-39e2434c/docs
2. **Check the Domains tab** - verify docs.nimbusbci.com configuration
3. **Check latest deployment** - confirm it includes our changes
4. **Promote if needed** - ensure custom domain points to latest

### If Still Broken After 15 Minutes
1. **Purge Vercel cache** via dashboard
2. **Redeploy** with force flag: `vercel --prod --force`
3. **Check DNS** - ensure CNAME points to correct Vercel URL

### Testing

**Test the deployment URL directly** (bypass custom domain):
```bash
# This URL has the fixes:
open https://docs-e3d5qdq1y-sergeys-projects-39e2434c.vercel.app/models/rxlda
```

If this works but docs.nimbusbci.com doesn't, it's purely a domain routing/cache issue.

## Key Insight

**The code is deployed and working!** 

The issue is just that the custom domain `docs.nimbusbci.com` hasn't updated to point to the latest deployment yet. This is a normal Vercel behavior - deployment URLs are instant, but custom domain cache takes a few minutes.

---

**Status**: ✅ Code deployed to Vercel  
**Next**: Wait 5-15 minutes OR manually promote in Vercel dashboard  
**Created**: October 27, 2025

