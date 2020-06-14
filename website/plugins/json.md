<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="/plugins">Plugins</a></li>
    <li><a href="/plugins/json">JSON</a></li>
  </ul>
</nav>

# JSON/JSONC Code Formatter

Supports:

* JSON
* JSONC (JSON with comments)

## Install and Setup

Specify the plugin url in *dprint.config.json* and add a `"json"` configuration property if desired:

```json
{
    // omitted...
    "json": {
        // json config goes here
    },
    "plugins": [
        "https://plugins.dprint.dev/json-x.x.x.wasm"
    ]
}
```

## Configuration

See [Configuration](/plugins/json/config)

## Playground

See [Playground](https://dprint.dev/playground#language/json)