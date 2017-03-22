---
layout: default
title: {{ site.name }}
---


<div class="featured-300px-photo">
  <img src="/static/images/2017_May_22_Save_Date.jpg" alt="Current Featured Photo" width="300">
</div>

<div id="home">
  <h1>News</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br>
      <span>(posted {{ post.date | date_to_string }})</span></li>
    {% endfor %}
  </ul>
</div>

