---
layout: post
title: "{{ nb.metadata.get('title', 'Untitled Notebook') }}"
date: {{ nb.metadata.get('date', '2025-07-16 10:00:00 -0000') }}
categories: [jupyter, data-science]
tags: [python, notebook, analysis]
---

{%- for cell in nb.cells -%}
{%- if cell.cell_type == 'markdown' -%}
{{ cell.source }}
{%- elif cell.cell_type == 'code' -%}
```python
{{ cell.source }}
```

{%- if cell.outputs -%}
{%- for output in cell.outputs -%}
{%- if output.output_type == 'stream' -%}
```
{{ output.text }}
```
{%- elif output.output_type == 'display_data' or output.output_type == 'execute_result' -%}
{%- if 'text/plain' in output.data -%}
```
{{ output.data['text/plain'] }}
```
{%- endif -%}
{%- if 'image/png' in output.data -%}
![Output](data:image/png;base64,{{ output.data['image/png'] }})
{%- endif -%}
{%- endif -%}
{%- endfor -%}
{%- endif -%}
{%- endif -%}
{%- endfor -%}
