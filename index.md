---
layout: default
---

<div class="intro" markdown="1">
I’m a Forward Deployed Engineer at BCG X in Paris, with a background in machine learning from CentraleSupélec and MVA. I enjoy understanding how things work, building things from scratch, and making them work better.
</div>

<hr class="bio-divider">

<section class="path" aria-label="Experience and education">
  <ol class="timeline">
    {% for entry in site.data.timeline %}
    <li class="timeline-entry">
      <div class="timeline-dates">{{ entry.dates | escape }}</div>
      <div class="timeline-logo">
        <img src="{{ entry.logo | relative_url }}" alt="" width="160" height="100"{% if entry.logo_dark %} data-light-src="{{ entry.logo | relative_url }}" data-dark-src="{{ entry.logo_dark | relative_url }}"{% endif %}>
      </div>
      <div class="timeline-content">
        <h2>{{ entry.name | escape }}</h2>
        {{ entry.description | markdownify }}
      </div>
    </li>
    {% endfor %}
  </ol>
</section>
