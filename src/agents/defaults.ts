// Defaults for agent metadata when upstream does not supply them.
// Local-first: default to Ollama so no cloud API key is required for core operation.
// Set OPENCLAW_DEFAULT_PROVIDER / OPENCLAW_DEFAULT_MODEL env vars to override.
export const DEFAULT_PROVIDER = process.env.OPENCLAW_DEFAULT_PROVIDER || "ollama";
export const DEFAULT_MODEL = process.env.OPENCLAW_DEFAULT_MODEL || "llama3.1:8b";
// Fallback context window — matches Ollama's default for Llama 3.1 8B (128K).
// Cloud models with larger windows will use their own metadata when resolved.
export const DEFAULT_CONTEXT_TOKENS = 128_000;
