// import React from 'react'
// import $ from 'jquery';
// function Items() {

//   componentDidMount(){
//   	$(document).ready(function () {
// 		// MDB Lightbox Init
// 		$(function () {
// 		  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
// 		});
// 	  });
// 	}

//     return (
// <>

//   <section class="mb-5">

// 		<div class="row">
// 			<div class="col-md-6 mb-4 mb-md-0">

// 			<div id="mdb-lightbox-ui"></div>

// 			<div class="mdb-lightbox">

// 				<div class="row product-gallery mx-1">

// 				<div class="col-12 mb-0">
// 					<figure class="view overlay rounded z-depth-1 main-img">
// 					<a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
// 						data-size="710x823">
// 						<img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
// 						class="img-fluid z-depth-1"/>
// 					</a>
// 					</figure>
// 					<figure class="view overlay rounded z-depth-1" style={{visibility: "hidden;"}}>
// 					<a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
// 						data-size="710x823">
// 						<img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
// 						class="img-fluid z-depth-1"/>
// 					</a>
// 					</figure>
// 					<figure class="view overlay rounded z-depth-1" style={{visibility: "hidden;"}}>
// 					<a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
// 						data-size="710x823">
// 						<img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
// 						class="img-fluid z-depth-1"/>
// 					</a>
// 					</figure>
// 					<figure class="view overlay rounded z-depth-1" style={{visibility: "hidden;"}}>
// 					<a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
// 						data-size="710x823">
// 						<img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
// 						class="img-fluid z-depth-1"/>
// 					</a>
// 					</figure>
// 				</div>
// 				<div class="col-12">
// 					<div class="row">
// 					<div class="col-3">
// 						<div class="view overlay rounded z-depth-1 gallery-item">
// 						<img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
// 							class="img-fluid"/>
// 						<div class="mask rgba-white-slight"></div>
// 						</div>
// 					</div>
// 					<div class="col-3">
// 						<div class="view overlay rounded z-depth-1 gallery-item">
// 						<img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
// 							class="img-fluid"/>
// 						<div class="mask rgba-white-slight"></div>
// 						</div>
// 					</div>
// 					<div class="col-3">
// 						<div class="view overlay rounded z-depth-1 gallery-item">
// 						<img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
// 							class="img-fluid"/>
// 						<div class="mask rgba-white-slight"></div>
// 						</div>
// 					</div>
// 					<div class="col-3">
// 						<div class="view overlay rounded z-depth-1 gallery-item">
// 						<img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
// 							class="img-fluid"/>
// 						<div class="mask rgba-white-slight"></div>
// 						</div>
// 					</div>
// 					</div>
// 				</div>
// 				</div>

// 			</div>

// 			</div>
// 			<div class="col-md-6">

// 			<h5>Fantasy T-shirt</h5>
// 			<p class="mb-2 text-muted text-uppercase small">Shirts</p>
// 			<ul class="rating">
// 				<li>
// 				<i class="fas fa-star fa-sm text-primary"></i>
// 				</li>
// 				<li>
// 				<i class="fas fa-star fa-sm text-primary"></i>
// 				</li>
// 				<li>
// 				<i class="fas fa-star fa-sm text-primary"></i>
// 				</li>
// 				<li>
// 				<i class="fas fa-star fa-sm text-primary"></i>
// 				</li>
// 				<li>
// 				<i class="far fa-star fa-sm text-primary"></i>
// 				</li>
// 			</ul>
// 			<p><span class="mr-1"><strong>$12.99</strong></span></p>
// 			<p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
// 				error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
// 				officia quis dolore quos sapiente tempore alias.</p>
// 			<div class="table-responsive">
// 				<table class="table table-sm table-borderless mb-0">
// 				<tbody>
// 					<tr>
// 					<th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
// 					<td>Shirt 5407X</td>
// 					</tr>
// 					<tr>
// 					<th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
// 					<td>Black</td>
// 					</tr>
// 					<tr>
// 					<th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
// 					<td>USA, Europe</td>
// 					</tr>
// 				</tbody>
// 				</table>
// 			</div>
// 			<hr/>
// 			<div class="table-responsive mb-2">
// 				<table class="table table-sm table-borderless">
// 				<tbody>
// 					<tr>
// 					<td class="pl-0 pb-0 w-25">Quantity</td>
// 					<td class="pb-0">Select size</td>
// 					</tr>
// 					<tr>
// 					<td class="pl-0">
// 						<div class="def-number-input number-input safari_only mb-0">
// 						{/* <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
// 							class="minus"></button>
// 						<input class="quantity" min="0" name="quantity" value="1" type="number">
// 						<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
// 							class="plus"></button>  */}
// 						</div>
// 					</td>
// 					<td>
// 						<div class="mt-1">
// 						<div class="form-check form-check-inline pl-0">
// 							<input type="radio" class="form-check-input" id="small" name="materialExampleRadios"
// 							checked />
// 							<label class="form-check-label small text-uppercase card-link-secondary"
// 							for="small">Small</label>
// 						</div>
// 						<div class="form-check form-check-inline pl-0">
// 							<input type="radio" class="form-check-input" id="medium" name="materialExampleRadios"/>
// 							<label class="form-check-label small text-uppercase card-link-secondary"
// 							for="medium">Medium</label>
// 						</div>
// 						<div class="form-check form-check-inline pl-0">
// 							<input type="radio" class="form-check-input" id="large" name="materialExampleRadios"/>
// 							<label class="form-check-label small text-uppercase card-link-secondary"
// 							for="large">Large</label>
// 						</div>
// 						</div>
// 					</td>
// 					</tr>
// 				</tbody>
// 				</table>
// 			</div> 
// 			 <button type="button" class="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
// 			<button type="button" class="btn btn-light btn-md mr-1 mb-2"><i
// 				class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
// 			</div>
// 		</div>
    
// 		</section>

// </>			
	
//     )
// }

// export default Items


import React, { Component } from 'react'
export class Items extends Component {
	render() {
		return (
	<div class="container-fluid">
	     	<div class="product-content product-wrap clearfix product-deatil">
				<div class="row">
				<div class="col-md-5 col-sm-12 col-xs-12">
                <div class="product-image">
                    <div id="myCarousel-2" class="carousel slide">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel-2" data-slide-to="0" class=""></li>
                            <li data-target="#myCarousel-2" data-slide-to="1" class="active"></li>
                            <li data-target="#myCarousel-2" data-slide-to="2" class=""></li>
                        </ol>
                        <div class="carousel-inner">
                   
                            <div class="item active">
                                <img src="https://via.placeholder.com/700x400/FFB6C1/000000" class="img-responsive" alt="" />
                            </div>
                           
                            <div class="item">
                                <img src="https://via.placeholder.com/700x400/87CEFA/000000" class="img-responsive" alt="" />
                            </div>
                          
                            <div class="item">
                                <img src="https://via.placeholder.com/700x400/B0C4DE/000000" class="img-responsive" alt="" />
                            </div>
                        </div>
                        <a class="left carousel-control" href="#myCarousel-2" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
                        <a class="right carousel-control" href="#myCarousel-2" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
                    </div>
                </div>
		</div>
					<div class="col-md-6 col-md-offset-0 col-sm-12 col-xs-12">
						<h2 class="name">
							Product Name Title Here
							<small>Product by <a href="javascript:void(0);">Adeline</a></small>
							<i class="fa fa-star fa-2x text-primary"></i>
							<i class="fa fa-star fa-2x text-primary"></i>
							<i class="fa fa-star fa-2x text-primary"></i>
							<i class="fa fa-star fa-2x text-primary"></i>
							<i class="fa fa-star fa-2x text-muted"></i>
							<span class="fa fa-2x"><h5>(109) Votes</h5></span>
							<a href="javascript:void(0);">109 customer reviews</a>
						</h2>
						<hr />
						<h3 class="price-container">
							$129.54
							<small>*includes tax</small>
						</h3>
						<div class="certified">
							<ul>
								<li>
									<a href="javascript:void(0);">Delivery time<span>7 Working Days</span></a>
								</li>
								<li>
									<a href="javascript:void(0);">Certified<span>Quality Assured</span></a>
								</li>
							</ul>
						</div>
						<hr />
						<div class="description description-tabs">
							<ul id="myTab" class="nav nav-pills">
								<li class="active"><a href="#more-information" data-toggle="tab" class="no-margin">Product Description </a></li>
								<li class=""><a href="#specifications" data-toggle="tab">Specifications</a></li>
								<li class=""><a href="#reviews" data-toggle="tab">Reviews</a></li>
							</ul>
							<div id="myTabContent" class="tab-content">
								<div class="tab-pane fade active in" id="more-information">
									<br />
									<strong>Description Title</strong>
									<p>
										Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue
										sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec.
									</p>
								</div>
								<div class="tab-pane fade" id="specifications">
									<br />
									<dl class="">
										<dt>Gravina</dt>
										<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
										<dd>Donec id elit non mi porta gravida at eget metus.</dd>
										<dd>Eget lacinia odio sem nec elit.</dd>
										<br />
		
										<dt>Test lists</dt>
										<dd>A description list is perfect for defining terms.</dd>
										<br />
		
										<dt>Altra porta</dt>
										<dd>Vestibulum id ligula porta felis euismod semper</dd>
									</dl>
								</div>
								<div class="tab-pane fade" id="reviews">
									<br />
									<form method="post" class="well padding-bottom-10" onsubmit="return false;">
										<textarea rows="2" class="form-control" placeholder="Write a review"></textarea>
										<div class="margin-top-10">
											<button type="submit" class="btn btn-sm btn-primary pull-right">
												Submit Review
											</button>
											<a href="javascript:void(0);" class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Location"><i class="fa fa-location-arrow"></i></a>
											<a href="javascript:void(0);" class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Voice"><i class="fa fa-microphone"></i></a>
											<a href="javascript:void(0);" class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Photo"><i class="fa fa-camera"></i></a>
											<a href="javascript:void(0);" class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add File"><i class="fa fa-file"></i></a>
										</div>
									</form>
		
									<div class="chat-body no-padding profile-message">
										<ul>
											<li class="message">
												<img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="online" />
												<span class="message-text">
													<a href="javascript:void(0);" class="username">
														Alisha Molly
														<span class="badge">Purchase Verified</span>
														<span class="pull-right">
															<i class="fa fa-star fa-2x text-primary"></i>
															<i class="fa fa-star fa-2x text-primary"></i>
															<i class="fa fa-star fa-2x text-primary"></i>
															<i class="fa fa-star fa-2x text-primary"></i>
															<i class="fa fa-star fa-2x text-muted"></i>
														</span>
													</a>
													Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved
												</span>
												<ul class="list-inline font-xs">
													<li>
														<a href="javascript:void(0);" class="text-info"><i class="fa fa-thumbs-up"></i> This was helpful (22)</a>
													</li>
													<li class="pull-right">
														<small class="text-muted pull-right ultra-light"> Posted 1 year ago </small>
													</li>
												</ul>
											</li>
											<li class="message">
												<img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="online" />
												<span class="message-text">
													<a href="javascript:void(0);" class="username">
														Aragon Zarko
														<span class="badge">Purchase Verified</span>
														<span class="pull-right">
															<i class="fa fa-star fa-2x text-primary"></i>
															<i class="fa fa-star fa-2x text-primary"></i>
															<i class="fa fa-star fa-2x text-primary"></i>
															<i class="fa fa-star fa-2x text-primary"></i>
															<i class="fa fa-star fa-2x text-primary"></i>
														</span>
													</a>
													Excellent product, love it!
												</span>
												<ul class="list-inline font-xs">
													<li>
														<a href="javascript:void(0);" class="text-info"><i class="fa fa-thumbs-up"></i> This was helpful (22)</a>
													</li>
													<li class="pull-right">
														<small class="text-muted pull-right ultra-light"> Posted 1 year ago </small>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<hr />
						<div class="row">
							<div class="col-sm-12 col-md-6 col-lg-6 butn1">
								<a href="javascript:void(0);" class="btn btn-success btn-default">Amazon</a>
							</div>
							<div class="col-sm-12 col-md-6 col-lg-6">
								<div class="btn-group pull-right">
									<button class="btn btn-white btn-default"><i class="fa fa-star"></i> Filpkart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		)
	}
}

export default Items



