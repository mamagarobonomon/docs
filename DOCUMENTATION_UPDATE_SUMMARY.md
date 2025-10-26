# Documentation Update Summary

## Overview

This document summarizes the comprehensive rewrite of Nimbus documentation to replace mock/placeholder content with accurate information based on the actual codebases:

- **NimbusSDK.jl** (Julia SDK) - RxLDA and RxGMM models
- **nimbus-api** (TypeScript) - Authentication and license management

## Major Changes

### ✅ Completed Updates

1. **Landing Page** (`index.mdx`)
   - Updated to reference Julia SDK (not Python)
   - Added RxLDA and RxGMM models
   - Clarified actual capabilities

2. **Quickstart Guide** (`quickstart.mdx`)
   - Complete rewrite with Julia code examples
   - Shows actual SDK functions: `authenticate()`, `load_model()`, `predict_batch()`
   - Emphasized preprocessing requirements
   - Removed all Python references

3. **Julia SDK Documentation** (`api-reference/julia-sdk.mdx`) - NEW
   - Complete API reference based on actual SDK exports
   - All functions, types, and data structures
   - Examples for batch and streaming inference
   - Training and calibration guides

4. **Authentication Docs** (`api-reference/authentication.mdx`)
   - Updated with actual API endpoints: `/v1/auth/validate`, `/v1/auth/refresh`, `/v1/auth/revoke`
   - Corrected to show Julia SDK usage (not Python)
   - Updated license tiers based on actual implementation

5. **API Endpoints** (`api-reference/inference-endpoints.mdx`)
   - **Major change**: Removed all non-existent inference endpoints
   - Documented actual API: auth, analytics, model registry
   - Clarified that inference is client-side, not API-based

6. **Streaming API** (`api-reference/streaming-api.mdx`)
   - Updated to show client-side streaming (not WebSocket API)
   - Documented SDK functions: `init_streaming()`, `process_chunk()`, `finalize_trial()`
   - Explained local processing architecture

7. **Preprocessing Requirements** (`inference-configuration/preprocessing-requirements.mdx`) - NEW
   - Critical guide on preparing EEG data
   - Emphasizes SDK expects preprocessed features, not raw EEG
   - Includes checklist, integration guides, common mistakes

8. **Preprocessing Integration** (`development/preprocessing-integration.mdx`) - NEW
   - Complete workflows for MNE-Python, EEGLAB, OpenVibe
   - Data shape transformation examples
   - Quality checks and troubleshooting

9. **RxLDA Model Documentation** (`models/rxlda.mdx`) - NEW
   - Complete documentation for RxLDA model
   - Training and inference examples
   - Performance characteristics
   - Comparison with RxGMM

10. **RxGMM Model Documentation** (`models/rxgmm.mdx`) - NEW
    - Complete documentation for RxGMM model
    - Use cases and when to choose over RxLDA
    - Training and performance characteristics

11. **Navigation Structure** (`docs.json`)
    - Updated to reflect new structure
    - Removed references to non-existent pages
    - Added new Julia SDK reference

## Architecture Clarifications

### Critical Understanding

**Nimbus API**: Handles authentication, licensing, analytics, and model registry only. Does NOT provide inference endpoints.

**NimbusSDK.jl**: Provides client-side BCI inference. All processing happens locally on the user's machine for:
- Maximum performance (sub-10ms latency)
- Privacy (EEG data never leaves local machine)
- Offline capability (after initial authentication)

### Two Models Available

1. **RxLDA** - Linear Discriminant Analysis with shared precision matrix
   - Fast, interpretable
   - Best for well-separated classes
   - 50-100 iterations, 10-30 seconds training

2. **RxGMM** - Gaussian Mixture Model with class-specific covariances
   - More flexible, handles complex distributions
   - Better for overlapping classes
   - 50-100 iterations, 15-60 seconds training

Both use **RxInfer.jl** for Bayesian inference via reactive message passing.

### Preprocessing Requirements

**Critical**: SDK expects preprocessed features, NOT raw EEG.

Required steps:
1. Bandpass filter (paradigm-specific: 8-30 Hz for Motor Imagery)
2. Artifact removal (ICA, regression, ASR)
3. Epoching (segment into trials)
4. Feature extraction (CSP, bandpower, ERP)

Expected data shape: `(n_features × n_samples × n_trials)`

## Files Removed/Should Be Removed

The following files contain mock/incorrect information and should be removed or archived:

- `api-reference/python-sdk.mdx` - Python SDK doesn't exist
- `api-reference/javascript-sdk.mdx` - JavaScript SDK doesn't exist
- `api-reference/rest-api.mdx` - Inference REST API doesn't exist
- `models/kalman-eeg-filtering.mdx` - Not in SDK yet
- `models/hmm-brain-states.mdx` - Not in SDK yet
- `models/ar-motor-rhythms.mdx` - Not in SDK yet
- `models/sensor-fusion.mdx` - Not in SDK yet
- `models/pomdp-control.mdx` - Not in SDK yet
- `essentials/` directory - Mintlify starter content
- `snippets/` directory - Placeholder content
- `ai-tools/` directory - Not relevant to product docs
- `api-reference/endpoint/` directory - Generic placeholders

## Files That Need Updates

The following files still reference Python SDK or need updating to match actual implementation:

- `examples/basic-examples.mdx` - Update to Julia
- `examples/advanced-applications.mdx` - Update to Julia
- `examples/code-samples.mdx` - Update to Julia
- `core-concepts/*.mdx` - Update to reference RxInfer and actual implementation
- `model-specification/*.mdx` - Update to reflect RxLDA/RxGMM
- `inference-configuration/*.mdx` - Already updated preprocessing-requirements, others need review

## Recommendations

1. **Remove or Archive**: Files listed in "Files Removed/Should Be Removed" section
2. **Update Examples**: All example code should use Julia, not Python
3. **Clarify Preprocessing**: Every page should emphasize preprocessing requirements
4. **Add Warnings**: Add clear warnings that Python SDK is planned but not yet implemented
5. **Update Core Concepts**: Ensure probabilistic AI and message passing pages reference RxInfer.jl

## Key Takeaways

- Documentation now accurately reflects actual implementation (Julia SDK, not Python)
- Preprocessing requirements are clearly documented and critical
- API structure is correct (auth/licensing, not inference endpoints)
- Two models (RxLDA, RxGMM) are properly documented
- Architecture is clarified (client-side inference for performance/privacy)

## Next Steps

1. Complete example file updates with Julia code
2. Update core concepts to reference RxInfer
3. Remove/archive non-existent model documentation
4. Clean up extra directories
5. Add "Coming Soon" markers for planned features (Python SDK, WebSocket API, etc.)

