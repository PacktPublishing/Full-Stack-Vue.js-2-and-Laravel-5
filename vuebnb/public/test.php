<?php
  // Load all listings
  $listings = \App\Listing::all();
  
  // Iterate listings, echo the address
  foreach ($listings as $listing) {
    echo $listing->address . '\n' ;
  }
  
   /*
    * Output:
    *
    * No. 11, Song-Sho Road, Taipei City, Taiwan 105
    * 110, Taiwan, Taipei City, Xinyi District, Section 5, Xinyi Road, 7
    * No. 51, Hanzhong Street, Wanhua District, Taipei City, Taiwan 108
    * ...
    */