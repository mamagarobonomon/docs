# Icon Validation Report for Nimbus BCI Documentation

## Summary
Found **66 unique icon names** used across the documentation.

## Icon Compatibility Analysis

### ✅ Common Lucide Icons (Likely Valid)
These icons are standard Lucide icons and should work correctly:
- arrow-right, bolt, book, brain, briefcase, calendar, check, clock, code, cog, 
- envelope, eye, filter, folder, github, globe, graduation-cap, hand, 
- heart, heartbeat, key, keyboard, layers, lightbulb, link, list, 
- play, rocket, server, shield, signal, star, wave-square, wheelch

### ⚠️ Potential Issues to Check

#### 1. Icon Name Format Mismatches
Mintlify uses Lucide icons which use **kebab-case**. Some icons may need adjustment:
- `question` → should be `help-circle` or `circle-help`?
- `question-circle` → should be `help-circle`?
- `file-code` → validate name
- `check-circle` → should be `circle-check`? (has both variants)
- `exclamation-triangle` → should be `alert-triangle`?
- `tachometer-alt` → should be `gauge`?

#### 2. Potentially Missing Icons
These may not exist in Lucide:
- `balance-scale` (not a standard icon)
- `chart-line`, `chart-scatter` (check if these are `trending-up`, `activity`)
- `database` (check if exists)
- `gauge`, `gauge-high` (may need `gauge` only)
- `layer-group` (check if exists or use `layers`)
- `microchip`, `microscope`, `stethoscope` (validate)
- `sparkles` (check if exists)
- `waveform` (may need `radio` or `wave-square` instead)
- `webhook` (validate)

#### 3. Duplicate/Different Naming
- `check-circle` and `circle-check` both used
- `gauge` and `gauge-high` (high may not exist)

## Recommendations

### Action Items:
1. **Test in production**: Run `mint dev` and visually check all icons
2. **Standardize naming**: Use consistent icon names (e.g., only `circle-check`, not both variants)
3. **Replace missing icons**: If icons don't display, find Lucide alternatives
4. **Add icon library config**: Consider adding explicit icon library to docs.json

### Suggested Fixes:
```json
// Add to docs.json if not already present
{
  "icons": {
    "library": "lucide"
  }
}
```

### Common Replacements:
- `question` → `help-circle`
- `question-circle` → `help-circle`  
- `check-circle` → `circle-check` (prefer this form)
- `exclamation-triangle` → `alert-triangle`
- `tachometer-alt` → `gauge`
- `balance-scale` → `scale` or custom SVG
- `chart-line` → `line-chart` or `trending-up`
- `chart-scatter` → `scatter-chart` or use custom
- `database` → verify exists, or use `database-2`
- `gauge-high` → `gauge` (remove high variant)
- `waveform` → `radio` or `wave-square`
- `webhook` → validate or use custom SVG

## Testing Commands
```bash
# Test locally
mint dev

# Check for broken icon renders
# Look for missing/invisible icons in the generated site
```

## Files to Review
- docs.json (line 98, 103, 108)
- All .mdx files with frontmatter 'icon:' property
- All .mdx files with Card components

## Icon Replacements Needed

Based on Lucide icon naming conventions, the following replacements are recommended:

### Files Needing Icon Updates:

**quickstart.mdx (3 instances):**
- Line 265: `icon="chart-line"` → `icon="line-chart"`
- Line 273: `icon="exclamation-triangle"` → `icon="alert-triangle"`  
- Line 289: `icon="question-circle"` → `icon="help-circle"`

**model-specification/advanced-techniques.mdx (2 instances):**
- Line 172: `icon="chart-line"` → `icon="line-chart"`
- Line 288: `icon="chart-scatter"` → `icon="scatter-chart"` or custom SVG

**model-specification/bci-examples.mdx (1 instance):**
- Line 274: `icon="layer-group"` → `icon="layers"`

**core-concepts/probabilistic-ai.mdx (1 instance):**
- Line 85: `icon="tachometer-alt"` → `icon="gauge"`

**development.mdx (1 instance):**
- Line 643: `icon="waveform"` → `icon="radio"` or `icon="wave-square"`

**examples/industry-use-cases.mdx (1 instance):**
- Line 602: `icon="gauge-high"` → `icon="gauge"`

**models/kalman-eeg-filtering.mdx (1 instance):**
- Line 364: `icon="chart-line"` → `icon="line-chart"`

**models/pomdp-control.mdx (1 instance):**
- Line 610: `icon="balance-scale"` → custom SVG or `icon="scale"`

**api-reference/webhook-integration.mdx (1 instance):**
- Line 99: `icon="chart-line"` → `icon="line-chart"`

### Additional Frontmatter Icons to Check:
- `icon: "question"` (3 instances) → should be `icon: "help-circle"`
- `icon: "question-circle"` (1 instance) → should be `icon: "help-circle"`

Total icon issues found: **12 replacements needed**
