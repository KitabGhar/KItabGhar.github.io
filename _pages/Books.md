---
title: Books
permalink: "/books/"
layout: books
---

<strong><marquee class="marq"><a href="../Feedback">can't find a book you are looking for??. please let us know in feedback section</a></marquee><br><br></strong>

<strong>For international orders please contact on Whatsapp<a href="tel:+91 70092 61058">+91 70092 61058</a> or <a href="https://www.instagram.com/online_kitab_ghar/">Instagram</a> DM for shipping details<br></strong>

<strong>Payments are processed manually on paytm and Google pay and orders are dispached only after sucessful payment, you can pay at paytm: 7009261058 or google pay at: raviakali94656@okaxis
</strong>

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
<style>
p.info{
align:centre;
}
p{
  padding:0px 150px 0px 150px;
}
/* .marq{
		border: 3px dashed black;
		padding:15px;
		background:rgb(183,74,255);
		background:rgb(128,128,128);
		background-clip: border-box;
	}	 */
    @media only screen and (max-width: 600px) {
  .container{
    padding-top :15px;
    padding-right: 15px;
  }
  p{
  padding:0px 30px 0px 30px;
}
}
</style>
</body>