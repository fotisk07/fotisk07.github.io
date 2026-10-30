---
layout: default
---

<div class="intro" markdown="1">
I'm a Forward Deployed Engineer at BCG X in Paris. My background is in machine learning; I've worked on computer vision, multimodal models, and making inference faster.
</div>

<section class="path" aria-labelledby="path-title">
  <h1 id="path-title">My path</h1>
  <ol class="timeline">
    {% for entry in site.data.timeline %}
    <li class="timeline-entry">
      <div class="timeline-dates">{{ entry.dates | escape }}</div>
      <div class="timeline-logo">
        <img src="{{ entry.logo | relative_url }}" alt="" width="160" height="100"{% if entry.logo_dark %} data-light-src="{{ entry.logo | relative_url }}" data-dark-src="{{ entry.logo_dark | relative_url }}"{% endif %}>
      </div>
      <div class="timeline-content">
        <h2><a href="{{ entry.url | escape }}">{{ entry.name | escape }}</a></h2>
        {{ entry.description | markdownify }}
      </div>
    </li>
    {% endfor %}
  </ol>
</section>
