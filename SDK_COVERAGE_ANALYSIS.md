# SDK Coverage Analysis

## Current State: Julia-Only vs Both SDKs

### ✅ Pages with BOTH Python & Julia Examples

**Getting Started:**
- `index.mdx` - ✅ Both SDKs with tabs
- `python-sdk/quickstart.mdx` - ✅ Python-focused (appropriate)
- `quickstart.mdx` - ✅ Julia-focused (appropriate)

**Models:**
- `models/rxlda.mdx` - ✅ Both SDKs with tabs
- `models/rxgmm.mdx` - ✅ Both SDKs with tabs
- `models/rxpolya.mdx` - ✅ Both SDKs with tabs

**Model Specification:**
- `model-specification/bci-examples.mdx` - ✅ Both SDKs with tabs
- `model-specification/advanced-techniques.mdx` - ✅ Both SDKs

**Examples:**
- `examples/basic-examples.mdx` - ✅ Both SDKs with tabs
- `examples/advanced-applications.mdx` - ✅ Both SDKs with tabs
- `examples/code-samples.mdx` - ✅ Both SDKs with tabs

**Preprocessing:**
- `inference-configuration/preprocessing-requirements.mdx` - ✅ Both (Python MNE examples + Julia usage)
- `development/preprocessing-integration.mdx` - ✅ Both (Python MNE + Julia integration)

### ⚠️ Pages that are JULIA-ONLY (Need Python Examples)

**Configuration & Setup Group:**
1. `inference-configuration/streaming-inference.mdx` - ❌ Julia only
2. `inference-configuration/batch-processing.mdx` - ❌ Julia only
3. `inference-configuration/real-time-setup.mdx` - ❌ Julia only
4. `inference-configuration/error-handling.mdx` - ❌ Julia only
5. `inference-configuration/feature-normalization.mdx` - ❌ Julia only

**Model Specification:**
6. `model-specification/index.mdx` - ❌ Julia only

**Core Concepts:**
7. `core-concepts/probabilistic-ai.mdx` - ❌ Julia only
8. `core-concepts/real-time-processing.mdx` - ❌ Julia only
9. `core-concepts/uncertainty-handling.mdx` - ❌ Julia only
10. `core-concepts/message-passing.mdx` - ❌ Julia only

**Examples:**
11. `examples/industry-use-cases.mdx` - ❌ Julia only

**Development:**
12. `development.mdx` - ❌ Julia only

**API Reference (Julia-specific, appropriate):**
- `api-reference/julia-sdk.mdx` - ✅ Julia-only (appropriate)
- `api-reference/introduction.mdx` - ✅ Mentions both SDKs
- `api-reference/authentication.mdx` - ✅ Julia-only (appropriate - Python SDK doesn't need API)
- `api-reference/streaming-api.mdx` - ✅ Julia-only (appropriate - API docs)
- `api-reference/inference-endpoints.mdx` - ✅ Julia-only (appropriate - API docs)

## Recommended Organization Strategy

### Option 1: Add Python Examples to Shared Pages (RECOMMENDED)

Add Python SDK examples to pages that apply to both SDKs:

**High Priority (User-facing features):**
1. `inference-configuration/streaming-inference.mdx` - Add Python `StreamingSession` examples
2. `inference-configuration/batch-processing.mdx` - Add Python `predict_batch` examples
3. `inference-configuration/feature-normalization.mdx` - Add Python normalization examples
4. `inference-configuration/error-handling.mdx` - Add Python error handling patterns
5. `examples/industry-use-cases.mdx` - Add Python examples for use cases

**Medium Priority (Conceptual pages):**
6. `core-concepts/probabilistic-ai.mdx` - Add Python examples showing Bayesian inference
7. `core-concepts/uncertainty-handling.mdx` - Add Python uncertainty quantification examples
8. `model-specification/index.mdx` - Add Python training examples

**Lower Priority (Julia-specific workflows):**
9. `inference-configuration/real-time-setup.mdx` - Could add Python streaming setup
10. `core-concepts/real-time-processing.mdx` - Could add Python real-time examples
11. `development.mdx` - Could split into Julia/Python development guides

### Option 2: Reorganize Navigation (Alternative)

Split "Configuration & Setup" into SDK-specific sections:

```json
{
  "group": "Python SDK Configuration",
  "pages": [
    "python-sdk/streaming-inference",
    "python-sdk/batch-processing", 
    "python-sdk/error-handling",
    "python-sdk/feature-normalization"
  ]
},
{
  "group": "Julia SDK Configuration",
  "pages": [
    "julia-sdk/streaming-inference",
    "julia-sdk/batch-processing",
    "julia-sdk/error-handling",
    "julia-sdk/feature-normalization"
  ]
}
```

**Pros:** Clear separation, no confusion
**Cons:** Duplication, harder to maintain, splits conceptually similar content

### Option 3: Hybrid Approach (BEST)

1. **Keep shared conceptual pages** with both SDK examples:
   - Core Concepts (add Python examples)
   - Model Specification (add Python examples)
   - Preprocessing Requirements (already has both)

2. **Keep Configuration & Setup as shared** but add Python tabs:
   - streaming-inference.mdx → Add Python `StreamingSession`
   - batch-processing.mdx → Add Python batch inference
   - feature-normalization.mdx → Add Python normalization
   - error-handling.mdx → Add Python error patterns
   - real-time-setup.mdx → Add Python real-time setup

3. **Keep API Reference Julia-only** (appropriate - Python SDK doesn't use API)

4. **Keep SDK-specific pages separate**:
   - Python SDK group → Python-specific features
   - Julia SDK & API group → Julia-specific features

## Implementation Plan

### Phase 1: High-Impact Pages (Do First)
1. `inference-configuration/streaming-inference.mdx` - Add Python streaming examples
2. `inference-configuration/batch-processing.mdx` - Add Python batch examples
3. `inference-configuration/feature-normalization.mdx` - Add Python normalization
4. `examples/industry-use-cases.mdx` - Add Python use case examples

### Phase 2: Core Concepts
5. `core-concepts/probabilistic-ai.mdx` - Add Python Bayesian examples
6. `core-concepts/uncertainty-handling.mdx` - Add Python uncertainty examples
7. `model-specification/index.mdx` - Add Python training examples

### Phase 3: Advanced Topics
8. `inference-configuration/error-handling.mdx` - Add Python error handling
9. `inference-configuration/real-time-setup.mdx` - Add Python real-time setup
10. `core-concepts/real-time-processing.mdx` - Add Python examples

### Phase 4: Development (Optional)
11. `development.mdx` - Consider splitting or adding Python development section
12. `core-concepts/message-passing.mdx` - Add Python implementation notes

## Expected Outcome

After implementation:
- **36 pages total**
- **~25 pages** with both SDK examples (up from ~13)
- **~6 pages** Python-only (Python SDK group)
- **~5 pages** Julia-only (Julia SDK & API group - appropriate)
- **0 pages** Julia-only in shared sections

This provides a balanced, user-friendly documentation where users of either SDK can find relevant examples in shared conceptual pages.

