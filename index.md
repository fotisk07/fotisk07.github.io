---
layout: default
---

<div class="intro" markdown="1">
I'm a Forward Deployed Engineer at BCG X in Paris. My background is in applied mathematics and machine learning, with work spanning computer vision, multimodal models, and efficient inference.
</div>

<section class="path" aria-labelledby="path-title">
  <h1 id="path-title">My path</h1>
  <ol class="timeline">
    {% for entry in site.data.timeline %}
    <li class="timeline-entry">
      <div class="timeline-dates">{{ entry.dates | escape }}</div>
      <div class="timeline-logo">
        <img src="{{ entry.logo | relative_url }}" alt="" width="44" height="44">
      </div>
      <div class="timeline-content">
        <h2><a href="{{ entry.url | escape }}">{{ entry.name | escape }}</a></h2>
        {{ entry.description | markdownify }}
      </div>
    </li>
    {% endfor %}
  </ol>
</section>
