---
layout: books
title: Books
permalink: /books/
---
can't find a book you are looking for. please let us know in <a href="../Feedback"> feedback section</a>
<body>
<h1 class="heading">Books</h1>
  {% for post in site.posts %}
    <!-- begin article -->
  <div class="article" id= "{{post.ids}}">
  <div class="container">
    <div class="article__wrapper">
      <a class="article__image" style="background-image: url({{site.baseurl}}/images/{{post.image}})">
      </a>
      <div class="article__content ">
        <div class="article-tags">
          <div class="article-tags__box">
             {% for tag in post.tags %}
              <a href="{{ site.baseurl }}/tag/{{ tag }}" class="article__tag">{{ tag }}</a>
            {% endfor %}
          </div>
        </div>
        <h2 class="article__title">
          <a href="{{site.baseurl}}/{{post.id}}">{{post.title}}</a>
        </h2>
        <h4>Price {{post.price}}</h4> 
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick="cartLS.add({id: {{post.ids}}, name: '{{post.title}}', price: {{post.price}}})">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
  <!-- end article -->
  {% endfor %}
<script src="{{ site.baseurl }}/js/main.js"></script>
 
</body>