# Navigation & Icon Review

## Problematic Icons (Not in Lucide)

These icons likely don't exist in Lucide and should be replaced:

1. **`python`** - Not a standard Lucide icon
   - Replace with: `code` or `file-code`
   
2. **`brain-circuit`** - Not in Lucide
   - Replace with: `brain` or `cpu`
   
3. **`flask-conical`** - Not in Lucide  
   - Replace with: `flask` (if it exists) or `beaker`
   
4. **`gamepad-2`** - Not in Lucide
   - Replace with: `gamepad`
   
5. **`wave-square`** - Not in Lucide
   - Replace with: `activity` or `radio`
   
6. **`server-cog`** - Not in Lucide
   - Replace with: `server` or `settings`
   
7. **`scatter-chart`** - Not in Lucide
   - Replace with: `chart-line` or `line-chart`
   
8. **`triangle-exclamation`** - Not in Lucide
   - Replace with: `alert-triangle`
   
9. **`brackets-curly`** - Not in Lucide
   - Replace with: `braces`

10. **`comments`** - Not in Lucide
    - Replace with: `message-circle` or `messages`

11. **`cubes`** - Not in Lucide
    - Replace with: `box` or `package`

12. **`heartbeat`** - Not in Lucide
    - Replace with: `heart-pulse` or `activity`

## Navigation Structure Issues

### Current Structure (9 groups):
1. Getting started (2 pages)
2. API documentation (6 pages) - **Julia SDK focused**
3. Python SDK (7 pages) - **New**
4. Core concepts (4 pages)
5. Model specification (3 pages)
6. Inference configuration (6 pages)
7. BCI Models (3 pages)
8. Examples & tutorials (4 pages)
9. Development (2 pages)

### Recommended Improvements:

#### 1. Reorganize SDK Documentation
**Problem**: "API documentation" is Julia-specific but sounds general

**Solution**: Rename and restructure
```json
{
  "group": "SDKs",
  "pages": [
    {
      "group": "Python SDK",
      "pages": [
        "python-sdk/introduction",
        "python-sdk/installation",
        "python-sdk/quickstart",
        "python-sdk/api-reference",
        "python-sdk/sklearn-integration",
        "python-sdk/streaming-inference",
        "python-sdk/mne-integration"
      ]
    },
    {
      "group": "Julia SDK",
      "pages": [
        "api-reference/julia-sdk",
        "api-reference/authentication",
        "api-reference/inference-endpoints"
      ]
    }
  ]
}
```

#### 2. Consolidate Model Documentation
**Problem**: "BCI Models" and "Model specification" are separate

**Solution**: Merge into one group
```json
{
  "group": "Models & Algorithms",
  "pages": [
    "models/rxlda",
    "models/rxgmm",
    "models/rxpolya",
    "model-specification/index",
    "model-specification/bci-examples",
    "model-specification/advanced-techniques"
  ]
}
```

#### 3. Streamline Getting Started
**Problem**: Users need to choose SDK first

**Solution**: Make it clearer
```json
{
  "group": "Getting Started",
  "pages": [
    "index",
    {
      "group": "Quickstart Guides",
      "pages": [
        "python-sdk/quickstart",
        "quickstart"
      ]
    }
  ]
}
```

#### 4. Consolidate Configuration
**Problem**: "Inference configuration" has mixed content

**Solution**: Better organization
```json
{
  "group": "Configuration & Setup",
  "pages": [
    "inference-configuration/preprocessing-requirements",
    "inference-configuration/feature-normalization",
    "inference-configuration/real-time-setup",
    "inference-configuration/batch-processing",
    "inference-configuration/streaming-inference",
    "inference-configuration/error-handling"
  ]
}
```

## Recommended Final Structure (7 groups):

1. **Getting Started** (3 pages)
   - Overview
   - Python Quickstart
   - Julia Quickstart

2. **Python SDK** (7 pages)
   - All current Python SDK pages

3. **Julia SDK & API** (6 pages)
   - Julia SDK reference
   - Authentication
   - Inference endpoints
   - Streaming API
   - Webhook integration
   - API introduction

4. **Models & Algorithms** (6 pages)
   - RxLDA
   - RxGMM
   - RxPolya
   - Model specification
   - BCI examples
   - Advanced techniques

5. **Configuration & Setup** (6 pages)
   - Preprocessing requirements
   - Feature normalization
   - Real-time setup
   - Batch processing
   - Streaming inference
   - Error handling

6. **Core Concepts** (4 pages)
   - Probabilistic AI
   - Real-time processing
   - Uncertainty handling
   - Message passing

7. **Examples & Development** (6 pages)
   - Basic examples
   - Advanced applications
   - Industry use cases
   - Code samples
   - Development guide
   - Preprocessing integration

## Benefits:
- Clearer SDK separation
- Better grouping of related content
- Reduced from 9 to 7 groups (less overwhelming)
- More logical flow for users

