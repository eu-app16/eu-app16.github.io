---
layout: page
title: Gallery
permalink: /gallery/
images:
  - image_path: /img/gallery/eisenberg/1.jpg
    title: 1
  - image_path: /img/gallery/eisenberg/2.jpg
    title: 2
  - image_path: /img/gallery/eisenberg/3.jpg
    title: 3
  - image_path: /img/gallery/eisenberg/4.jpg
    title: 4
  - image_path: /img/gallery/eisenberg/5.jpg
    title: 5
  - image_path: /img/gallery/eisenberg/14.jpg
    title: 14
  - image_path: /img/gallery/eisenberg/6.jpg
    title: 6
  - image_path: /img/gallery/eisenberg/7.jpg
    title: 7
  - image_path: /img/gallery/eisenberg/8.jpg
    title: 8
  - image_path: /img/gallery/eisenberg/9.jpg
    title: 9
  - image_path: /img/gallery/eisenberg/10.jpg
    title: 10
  - image_path: /img/gallery/eisenberg/11.jpg
    title: 11
  - image_path: /img/gallery/eisenberg/12.jpg
    title: 12
  - image_path: /img/gallery/eisenberg/13.jpg
    title: 13
---
###### Our gallery

<ul class="photo-gallery">
  {% for image in page.images %}
    <li><img src="{{ image.image_path }}" alt="{{ image.title}}"/></li>
  {% endfor %}
</ul>
