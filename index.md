---
layout: default
title: {{ site.name }}
---


<div class="featured-300px-photo">
  <img src="/static/images/2017_May_22_Save_Date.jpg" alt="Current Featured Photo" width="300">
</div>

<div id="home">
  <p>Our next full-length concert will be Monday, May 22, 8PM, at the First United Methodist Church, Santa Barbara 305 E Anapamu St, Santa Barbara, California 93101. <a href="/concerts">More details</a></p>
  <h2>News</h2>
  <ul class="posts">
    {% for post in site.posts %}
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br>
      <span>(posted {{ post.date | date_to_string }})</span></li>
    {% endfor %}
  </ul>
</div>

