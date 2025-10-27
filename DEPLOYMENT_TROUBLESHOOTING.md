# Deployment Troubleshooting - rxlda 404 Error

## Current Status

**Issue**: https://docs.nimbusbci.com/models/rxlda shows 404 Page Not Found
**Local Status**: ✅ All files exist, navigation configured correctly
**Git Status**: ✅ All changes committed and pushed (3 commits)

## Commits Pushed

1. `7dc2fc0` - Fix navigation panel structure and broken links
2. `f9b793f` - Fix MDX syntax errors
3. `ac1a8da` - Bump version to 2.0.1 to force fresh deployment

## Root Cause Analysis

The 404 error is likely due to one of these issues:

### 1. Deployment Delay (Most Likely)
Mintlify's auto-deployment takes time to process changes. This can take 5-15 minutes depending on:
- Build queue
- Cache invalidation
- CDN propagation

### 2. Build Cache Issue
The old navigation structure may still be cached even though we pushed new changes.

### 3. Webhook Not Configured
The GitHub webhook may not be properly triggering Mintlify deployments.

## Immediate Solutions

### Solution 1: Wait and Monitor (Recommended First Step)

**Action**: Wait 10-15 minutes and check again

The version bump to `2.0.1` should force a fresh build. Monitor the Mintlify dashboard for deployment status.

### Solution 2: Manual Deploy via Mintlify Dashboard

**Steps**:
1. Go to https://dashboard.mintlify.com
2. Select your Nimbus project
3. Go to "Deployments" section
4. Look for:
   - Latest deployment status
   - Any error messages
   - Build logs
5. Click "Redeploy" if available

### Solution 3: Clear Mintlify CDN Cache

**Steps**:
1. In Mintlify dashboard, go to Settings
2. Look for "Cache" or "Purge Cache" option
3. Purge the CDN cache
4. Trigger a new deployment

### Solution 4: Check GitHub Webhook

**Steps**:
1. Go to GitHub repository settings: https://github.com/mamagarobonomon/docs/settings/hooks
2. Find Mintlify webhook
3. Check recent deliveries
4. Verify webhook is responding successfully
5. If failing, click "Redeliver" for the latest push

### Solution 5: Contact Mintlify Support

If the above don't work, Mintlify support can manually trigger a rebuild:
- Email: support@mintlify.com
- Include: Project name, repository URL, commit hash (`ac1a8da`)

## Verification Checklist

Run these checks:

### ✅ Local Verification (All Passing)

```bash
cd /Users/sergeymusienko/Nimbus-docs/docs

# Check file exists
ls -la models/rxlda.mdx
# Output: -rw-r--r--@ 1 ... models/rxlda.mdx ✓

# Check navigation includes it
grep -A 5 '"BCI Models"' docs.json
# Should show: "models/rxlda" ✓

# Check git status
git status
# Output: working tree clean ✓

# Check latest commits
git log --oneline -3
# Shows all 3 commits pushed ✓
```

### ⏳ Remote Verification (Pending)

- [ ] Check Mintlify dashboard deployment status
- [ ] Verify webhook triggered successfully
- [ ] Check build logs for errors
- [ ] Test page after 15 minutes: https://docs.nimbusbci.com/models/rxlda

## What Changed in Navigation

### Before (Broken)
```json
"navigation": {
  "tabs": [
    { 
      "tab": "Documentation",
      "groups": [
        {
          "group": "BCI Models",
          "pages": ["models/rxlda", "models/rxgmm"]
        }
      ]
    }
  ]
}
```

### After (Fixed)
```json
"navigation": [
  {
    "group": "BCI Models",
    "pages": ["models/rxlda", "models/rxgmm"]
  }
]
```

## Technical Details

### File Location
- Path: `/Users/sergeymusienko/Nimbus-docs/docs/models/rxlda.mdx`
- Size: 11,748 bytes
- Last Modified: Oct 27, 2025 00:57

### Frontmatter
```yaml
---
title: "RxLDA Model"
description: "Linear Discriminant Analysis with Bayesian inference using RxInfer.jl"
icon: "brain"
---
```

### Navigation Entry
```json
{
  "group": "BCI Models",
  "pages": [
    "models/rxlda",  // ← This is correct
    "models/rxgmm"
  ]
}
```

## Expected Timeline

| Time | Expected Action |
|------|----------------|
| T+0 (now) | Commits pushed to GitHub |
| T+1 min | GitHub webhook triggers Mintlify |
| T+2-5 min | Mintlify build starts |
| T+5-10 min | Build completes |
| T+10-15 min | CDN cache updates |
| **T+15 min** | **Page should be live** |

## Monitoring Commands

Use these to monitor status:

```bash
# Check latest commits
git log --oneline -5

# Verify docs.json version
grep '"version"' docs.json

# Check if file is tracked by git
git ls-files models/rxlda.mdx

# View last commit details
git show --stat
```

## If Still Failing After 15 Minutes

1. **Check Mintlify Build Logs**
   - Look for syntax errors
   - Check for file path issues
   - Verify navigation schema errors

2. **Test Locally**
   ```bash
   npx mintlify dev
   # Open http://localhost:3000/models/rxlda
   # Should work locally
   ```

3. **Compare with Working Page**
   - Check if https://docs.nimbusbci.com/models/rxgmm works
   - If it does, compare the two MDX files for differences

4. **Rollback Test**
   - If needed, we can temporarily rollback to see if it was our changes
   - But unlikely to be necessary

## Success Criteria

The issue will be resolved when:
- ✅ https://docs.nimbusbci.com/models/rxlda returns 200 OK
- ✅ Page shows "RxLDA - Bayesian Linear Discriminant Analysis"
- ✅ Navigation sidebar highlights "Rxlda" correctly
- ✅ All internal links work

## Additional Resources

- Mintlify Docs: https://mintlify.com/docs
- Mintlify Status: https://status.mintlify.com
- GitHub Webhooks: https://docs.github.com/webhooks

---

**Last Updated**: October 27, 2025
**Status**: Waiting for deployment propagation (expected: 15 minutes)
**Next Action**: Check Mintlify dashboard and wait for auto-deployment

