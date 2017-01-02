---
layout: default
title: {{ site.name }}
---


<div class="featured-300px-photo">
  <img src="static/images/featured-300px-photo.jpg" alt="Current Featured Photo" width="300">
</div>

<div id="home">
  <h1>News</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>

