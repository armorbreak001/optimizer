import {
  inputJSON,
  inputYAML,
  outputJSON_mATCFalse_mDTCTrue_schemaFalse,
  outputYAML_mATCFalse_mDTCTrue_schemaFalse,
  outputYAML_mATCTrue_mDTCFalse_schemaFalse,
  outputJSON_mATCTrue_mDTCFalse_schemaFalse,
  outputYAML_mATCFalse_mDTCTrue_schemaTrue,
  outputJSON_mATCFalse_mDTCTrue_schemaTrue,
  outputYAML_mATCTrue_mDTCFalse_schemaTrue,
  outputJSON_mATCTrue_mDTCFalse_schemaTrue,
} from './fixtures'
import { Optimizer } from '../src'
import { Output } from '../src/Optimizer'

describe('Optimizer', () => {
  it('should produce the correct optimized file with YAML input and `{ moveAllToComponents: false, moveDuplicatesToComponents: true }, disableOptimizationFor: { schema: false } }`.', async () => {
    const optimizer = new Optimizer(inputYAML)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.YAML,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: false,
            moveDuplicatesToComponents: true,
          },
          disableOptimizationFor: {
            schema: false,
          },
        })
        .trim()
    ).toEqual(outputYAML_mATCFalse_mDTCTrue_schemaFalse.trim())
  })

  it('should produce the correct optimized file with JSON input and `{ moveAllToComponents: false, moveDuplicatesToComponents: true }, disableOptimizationFor: { schema: false } }`.', async () => {
    const optimizer = new Optimizer(inputJSON)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.YAML,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: false,
            moveDuplicatesToComponents: true,
          },
          disableOptimizationFor: {
            schema: false,
          },
        })
        .trim()
    ).toEqual(outputYAML_mATCFalse_mDTCTrue_schemaFalse.trim())
  })

  it('should produce the correct JSON output and `{ moveAllToComponents: false, moveDuplicatesToComponents: true }, disableOptimizationFor: { schema: false } }`.', async () => {
    const optimizer = new Optimizer(inputYAML)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.JSON,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: false,
            moveDuplicatesToComponents: true,
          },
          disableOptimizationFor: {
            schema: false,
          },
        })
        .trim()
    ).toEqual(outputJSON_mATCFalse_mDTCTrue_schemaFalse.trim())
  })

  it('should produce the correct optimized file with YAML input and `{ moveAllToComponents: true, moveDuplicatesToComponents: false }, disableOptimizationFor: { schema: false } }`.', async () => {
    const optimizer = new Optimizer(inputYAML)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.YAML,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: true,
            moveDuplicatesToComponents: false,
          },
          disableOptimizationFor: {
            schema: false,
          },
        })
        .trim()
    ).toEqual(outputYAML_mATCTrue_mDTCFalse_schemaFalse.trim())
  })

  it('should produce the correct optimized file with JSON input and `{ moveAllToComponents: true, moveDuplicatesToComponents: false }, disableOptimizationFor: { schema: false } }`.', async () => {
    const optimizer = new Optimizer(inputJSON)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.YAML,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: true,
            moveDuplicatesToComponents: false,
          },
          disableOptimizationFor: {
            schema: false,
          },
        })
        .trim()
    ).toEqual(outputYAML_mATCTrue_mDTCFalse_schemaFalse.trim())
  })

  it('should produce the correct JSON output and `{ moveAllToComponents: true, moveDuplicatesToComponents: false }, disableOptimizationFor: { schema: false } }`.', async () => {
    const optimizer = new Optimizer(inputYAML)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.JSON,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: true,
            moveDuplicatesToComponents: false,
          },
          disableOptimizationFor: {
            schema: false,
          },
        })
        .trim()
    ).toEqual(outputJSON_mATCTrue_mDTCFalse_schemaFalse.trim())
  })

  it('should produce the correct optimized file with YAML input and `{ moveAllToComponents: false, moveDuplicatesToComponents: true }, disableOptimizationFor: { schema: true } }`.', async () => {
    const optimizer = new Optimizer(inputYAML)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.YAML,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: false,
            moveDuplicatesToComponents: true,
          },
          disableOptimizationFor: {
            schema: true,
          },
        })
        .trim()
    ).toEqual(outputYAML_mATCFalse_mDTCTrue_schemaTrue.trim())
  })

  it('should produce the correct optimized file with JSON input and `{ moveAllToComponents: false, moveDuplicatesToComponents: true }, disableOptimizationFor: { schema: true } }`.', async () => {
    const optimizer = new Optimizer(inputJSON)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.YAML,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: false,
            moveDuplicatesToComponents: true,
          },
          disableOptimizationFor: {
            schema: true,
          },
        })
        .trim()
    ).toEqual(outputYAML_mATCFalse_mDTCTrue_schemaTrue.trim())
  })

  it('should produce the correct JSON output and `{ moveAllToComponents: false, moveDuplicatesToComponents: true }, disableOptimizationFor: { schema: true } }`.', async () => {
    const optimizer = new Optimizer(inputYAML)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.JSON,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: false,
            moveDuplicatesToComponents: true,
          },
          disableOptimizationFor: {
            schema: true,
          },
        })
        .trim()
    ).toEqual(outputJSON_mATCFalse_mDTCTrue_schemaTrue.trim())
  })

  it('should produce the correct optimized file with YAML input and `{ moveAllToComponents: true, moveDuplicatesToComponents: false }, disableOptimizationFor: { schema: true } }`.', async () => {
    const optimizer = new Optimizer(inputYAML)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.YAML,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: true,
            moveDuplicatesToComponents: false,
          },
          disableOptimizationFor: {
            schema: true,
          },
        })
        .trim()
    ).toEqual(outputYAML_mATCTrue_mDTCFalse_schemaTrue.trim())
  })

  it('should produce the correct optimized file with JSON input and `{ moveAllToComponents: true, moveDuplicatesToComponents: false }, disableOptimizationFor: { schema: true } }`.', async () => {
    const optimizer = new Optimizer(inputJSON)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.YAML,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: true,
            moveDuplicatesToComponents: false,
          },
          disableOptimizationFor: {
            schema: true,
          },
        })
        .trim()
    ).toEqual(outputYAML_mATCTrue_mDTCFalse_schemaTrue.trim())
  })

  it('should produce the correct JSON output and `{ moveAllToComponents: true, moveDuplicatesToComponents: false }, disableOptimizationFor: { schema: true } }`.', async () => {
    const optimizer = new Optimizer(inputYAML)
    await optimizer.getReport()
    expect(
      optimizer
        .getOptimizedDocument({
          output: Output.JSON,
          rules: {
            reuseComponents: true,
            removeComponents: true,
            moveAllToComponents: true,
            moveDuplicatesToComponents: false,
          },
          disableOptimizationFor: {
            schema: true,
          },
        })
        .trim()
    ).toEqual(outputJSON_mATCTrue_mDTCFalse_schemaTrue.trim())
  })

  it('should not produce invalid $ref paths for schemas nested inside allOf/anyOf/oneOf arrays (issue #1990)', async () => {
    const inputWithAllOf = `
asyncapi: 3.0.0
id: "urn:com:example"
info:
  title: x
  version: 1.4.0
operations:
  A:
    action: "send"
    channel:
      $ref: "#/channels/A"
    messages:
      - $ref: "#/channels/A/messages/A"
channels:
  A:
    address: ""
    messages:
      A:
        $ref: "#/components/messages/A"
components:
  messages:
    A:
      contentType: "application/json"
      payload:
        allOf:
          - $ref: "#/components/schemas/EventEnvelope"
          - $ref: "#/components/schemas/EnvelopeOverrides"
          - type: object
            properties:
              data:
                $ref: "#/components/schemas/A"
  schemas:
    A:
      type: object
      properties:
        a:
          type: string
    EnvelopeOverrides:
      type: object
      properties:
        type:
          type: string
          const: "a"
    EventEnvelope:
      allOf:
        - type: object
          properties:
            specversion:
              type: string
            source:
              type: string
`
    const optimizer = new Optimizer(inputWithAllOf)
    await optimizer.getReport()
    const result = optimizer.getOptimizedDocument({
      output: Output.YAML,
      rules: {
        reuseComponents: true,
        removeComponents: true,
        moveAllToComponents: true,
        moveDuplicatesToComponents: false,
      },
      disableOptimizationFor: {
        schema: false,
      },
    })

    // Should not contain invalid array-index $ref paths
    expect(result).not.toContain('#/components/schemas/[0]')
    expect(result).not.toContain('#/components/schemas/[1]')
    expect(result).not.toContain('#/components/schemas/[2]')
    // Should not have numeric schema keys
    expect(result).not.toMatch(/schemas:\s*\n\s*'0'/)
    expect(result).not.toMatch(/schemas:\s*\n\s*"0"/)
    // All schema keys should be valid identifiers, not numeric or array-indexed
    const schemaKeys = result.match(/schemas:\s*\n((?:\s+.*\n*)+)/)?.[1] || ''
    const schemaNames = schemaKeys.match(/^\s{4}(\w+)/gm) || []
    for (const name of schemaNames) {
      expect(/^\d+$/.test(name)).toBe(false)
      expect(/^\[\d+\]$/.test(name)).toBe(false)
    }
  })
})
