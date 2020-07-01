"use strict";

function renderPortfolio() {
    const workGalleryWrapper = document.getElementById('workGalleryWrapper');
    const tabPanel = document.getElementById('workTabPanel');
    const allCatTab = document.getElementById('ourWorkTabAll');
    const graphicCatTab = document.getElementById('ourWorkTabGraphic');
    const webCatTab = document.getElementById('ourWorkTabWeb');
    const landingCatTab = document.getElementById('ourWorkTabLanding');
    const wordpressCatTab = document.getElementById('ourWorkTabWordpress');
    const addPicsBtn = document.getElementById('loadPics');
    const loader = document.getElementsByClassName('loader')[0];
    let selectedCategory = 'all';
    let counter = 0;
    
    const GalleryPath = [
        //Graphic Design pics
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design1.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design2.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design3.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design4.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design5.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design6.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design7.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design8.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design9.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design10.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design11.jpg',
        },
        {
            category: "Graphic Design",
            group: "Graphic Design",
            url: 'img/our_amazing_work/graphic design/graphic-design12.jpg',
        },
        
        //Web Design pics
        {
            category: "Web Design",
            group: "Web Design",
            url: 'img/our_amazing_work/web design/web-design1.jpg',
        },
        {
            category: "Web Design",
            group: "Web Design",
            url: 'img/our_amazing_work/web design/web-design2.jpg',
        },
        {
            category: "Web Design",
            group: "Web Design",
            url: 'img/our_amazing_work/web design/web-design3.jpg',
        },
        {
            category: "Web Design",
            group: "Web Design",
            url: 'img/our_amazing_work/web design/web-design4.jpg',
        },
        {
            category: "Web Design",
            group: "Web Design",
            url: 'img/our_amazing_work/web design/web-design5.jpg',
        },
        {
            category: "Web Design",
            group: "Web Design",
            url: 'img/our_amazing_work/web design/web-design6.jpg',
        },
        {
            category: "Web Design",
            group: "Web Design",
            url: 'img/our_amazing_work/web design/web-design7.jpg',
        },
        
        //landing page pics
        {
            category: "Landing Pages",
            group: "Landing Pages",
            url: 'img/our_amazing_work/landing page/landing-page1.jpg',
        },
        {
            category: "Landing Pages",
            group: "Landing Pages",
            url: 'img/our_amazing_work/landing page/landing-page2.jpg',
        },
        {
            category: "Landing Pages",
            group: "Landing Pages",
            url: 'img/our_amazing_work/landing page/landing-page3.jpg',
        },
        {
            category: "Landing Pages",
            group: "Landing Pages",
            url: 'img/our_amazing_work/landing page/landing-page4.jpg',
        },
        {
            category: "Landing Pages",
            group: "Landing Pages",
            url: 'img/our_amazing_work/landing page/landing-page5.jpg',
        },
        {
            category: "Landing Pages",
            group: "Landing Pages",
            url: 'img/our_amazing_work/landing page/landing-page6.jpg',
        },
        {
            category: "Landing Pages",
            group: "Landing Pages",
            url: 'img/our_amazing_work/landing page/landing-page7.jpg',
        },
    
        // wordpress pics
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress1.jpg',
        },
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress2.jpg',
        },
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress3.jpg',
        },
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress4.jpg',
        },
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress5.jpg',
        },
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress6.jpg',
        },
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress7.jpg',
        },
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress8.jpg',
        },
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress9.jpg',
        },
        {
            category: "Wordpress",
            group: "Wordpress",
            url: 'img/our_amazing_work/wordpress/wordpress10.jpg',
        },
    
        //mixed gallery for tab "All"
        {
            category: "all",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/mix1.jpg',
        },
        {
            category: "all",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/mix2.jpg',
        },
        {
            category: "all",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/mix3.jpg',
        },
        {
            category: "all",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/mix4.jpg',
        },
        {
            category: "all",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/mix5.jpg',
        },
        {
            category: "all",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/mix6.jpg',
        },
        {
            category: "all",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/mix7.jpg',
        },
        {
            category: "all",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/mix8.jpg',
        },
        {
            category: "all",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/mix9.jpg',
        },
        {
            category: "all",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/mix10.jpg',
        },
        {
            category: "all",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/mix11.jpg',
        },
        {
            category: "all",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/mix12.jpg',
        },

    //additional pics all tab
            //part1
            {
                category: "all-1",
                group: "Web Design",
                url: 'img/our_amazing_work/mix/all/part1/1.jpg',
            },
            {
                category: "all-1",
                group: "Graphic Design",
                url: 'img/our_amazing_work/mix/all/part1/2.jpg',
            },
            {
                category: "all-1",
                group: "Wordpress",
                url: 'img/our_amazing_work/mix/all/part1/3.jpg',
            },
            {
                category: "all-1",
                group: "Web Design",
                url: 'img/our_amazing_work/mix/all/part1/4.jpg',
            },
            {
                category: "all-1",
                group: "Web Design",
                url: 'img/our_amazing_work/mix/all/part1/5.jpg',
            },
            {
                category: "all-1",
                group: "Wordpress",
                url: 'img/our_amazing_work/mix/all/part1/6.jpg',
            },
            {
                category: "all-1",
                group: "Graphic Design",
                url: 'img/our_amazing_work/mix/all/part1/7.jpg',
            },
            {
                category: "all-1",
                group: "Landing Pages",
                url: 'img/our_amazing_work/mix/all/part1/8.jpg',
            },
            {
                category: "all-1",
                group: "Graphic Design",
                url: 'img/our_amazing_work/mix/all/part1/9.jpg',
            },
            {
                category: "all-1",
                group: "Web Design",
                url: 'img/our_amazing_work/mix/all/part1/10.jpg',
            },
            {
                category: "all-1",
                group: "Wordpress",
                url: 'img/our_amazing_work/mix/all/part1/11.jpg',
            },
            {
                category: "all-1",
                group: "Landing Pages",
                url: 'img/our_amazing_work/mix/all/part1/12.jpg',
            },
            
            //part2
            {
                category: "all-2",
                group: "Web Design",
                url: 'img/our_amazing_work/mix/all/part2/1.jpg',
            },
            {
                category: "all-2",
                group: "Graphic Design",
                url: 'img/our_amazing_work/mix/all/part2/2.jpg',
            },
            {
                category: "all-2",
                group: "Wordpress",
                url: 'img/our_amazing_work/mix/all/part2/3.jpg',
            },
            {
                category: "all-2",
                group: "Web Design",
                url: 'img/our_amazing_work/mix/all/part2/4.jpg',
            },
            {
                category: "all-2",
                group: "Web Design",
                url: 'img/our_amazing_work/mix/all/part2/5.jpg',
            },
            {
                category: "all-2",
                group: "Wordpress",
                url: 'img/our_amazing_work/mix/all/part2/6.jpg',
            },
            {
                category: "all-2",
                group: "Graphic Design",
                url: 'img/our_amazing_work/mix/all/part2/7.jpg',
            },
            {
                category: "all-2",
                group: "Landing Pages",
                url: 'img/our_amazing_work/mix/all/part2/8.jpg',
            },
            {
                category: "all-2",
                group: "Graphic Design",
                url: 'img/our_amazing_work/mix/all/part2/9.jpg',
            },
            {
                category: "all-2",
                group: "Web Design",
                url: 'img/our_amazing_work/mix/all/part2/10.jpg',
            },
            {
                category: "all-2",
                group: "Wordpress",
                url: 'img/our_amazing_work/mix/all/part2/11.jpg',
            },
            {
                category: "all-2",
                group: "Landing Pages",
                url: 'img/our_amazing_work/mix/all/part2/12.jpg',
            },

        //additional pics graphic design
        //part1
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/1.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/2.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/3.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/4.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/5.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/6.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/7.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/8.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/9.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/10.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/11.jpg',
        },
        {
            category: "Graphic Design-1",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part1/12.jpg',
        },

        //part2
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/1.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/2.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/3.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/4.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/5.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/6.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/7.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/8.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/9.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/10.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/11.jpg',
        },
        {
            category: "Graphic Design-2",
            group: "Graphic Design",
            url: 'img/our_amazing_work/mix/gd/part2/12.jpg',
        },

    //additional pics web design
        //part1
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/1.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/2.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/3.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/4.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/5.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/6.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/7.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/8.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/9.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/10.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/11.jpg',
        },
        {
            category: "Web Design-1",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part1/12.jpg',
        },
    //part2
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/1.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/2.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/3.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/4.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/5.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/6.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/7.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/8.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/9.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/10.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/11.jpg',
        },
        {
            category: "Web Design-2",
            group: "Web Design",
            url: 'img/our_amazing_work/mix/wd/part2/12.jpg',
        },
    //additional pics landing pages
    //part1
         {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/1.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/2.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/3.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/4.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/5.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/6.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/7.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/8.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/9.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/10.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/11.jpg',
        },
        {
            category: "Landing Pages-1",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part1/12.jpg',
        },
        //part2    
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/1.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/2.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/3.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/4.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/5.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/6.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/7.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/8.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/9.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/10.jpg',
        },
                {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/11.jpg',
        },
        {
            category: "Landing Pages-2",
            group: "Landing Pages",
            url: 'img/our_amazing_work/mix/lp/part2/12.jpg',
        },
               
        //additional pics wordpress
        //part1
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/1.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/2.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/3.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/4.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/5.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/6.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/7.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/8.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/9.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/10.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/11.jpg',
        },
        {
            category: "Wordpress-1",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part1/12.jpg',
        },
        
         //part2
         {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/1.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/2.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/3.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/4.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/5.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/6.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/7.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/8.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/9.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/10.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/11.jpg',
        },
        {
            category: "Wordpress-2",
            group: "Wordpress",
            url: 'img/our_amazing_work/mix/wp/part2/12.jpg',
        },
        
    ];
    
    const clearPictureSet = () => [...workGalleryWrapper.children].forEach(pic => pic.remove());
    
    const showActiveTab = (activeTab) => {
        [...tabPanel.children].forEach(tab => tab.className = "our-work-tabs");
        activeTab.classList.add('our-work-tabs-active');
    }

    const renderFilteredPics = (pictureCategory) => {
        const pictureSet = [];
        GalleryPath.filter(e => e.category === pictureCategory).forEach(pic => {
            const picContainer = document.createElement('div');
            picContainer.className = 'our-work-gallery-pic-wrapper';
            
            const galleryPic = document.createElement('img');
            galleryPic.className = 'our-work-gallery-pic lazyload';
            galleryPic.setAttribute('src','img\\icons\\placeholder_2.gif');
            galleryPic.setAttribute('data-src',`${pic.url}`);
            galleryPic.setAttribute('alt','see more our works' );

            const picContainerHover = document.createElement('div');
            picContainerHover.className = 'our-work-gallery-pic-cover';
            
                const picContainerHoverDesc = document.createElement('div');
                picContainerHoverDesc.className = 'our-work-gallery-pic-desc';

                const picContainerHoverText = document.createElement('p');
                picContainerHoverText.className = 'our-work-gallery-pic-text';
                picContainerHoverText.textContent = 'creative design';

                const picContainerHoverGroup = document.createElement('p');
                picContainerHoverGroup.className = 'our-work-gallery-pic-group';
                picContainerHoverGroup.textContent = `${pic.group}`;

            const picButtons = document.createElement('div');
            picButtons.className = 'our-work-gallery-buttons';
                
                const shareBtn = document.createElement('a');
                shareBtn.href = '#';
                shareBtn.classList.add('cover-btn-share');
                const shareBtnIconWrapper = document.createElement('div');
                shareBtnIconWrapper.classList.add('cover-btn-share-icons-wrapper');
                const shareIcon = document.createElement('img');
                shareIcon.classList.add('cover-btn-share-icon');
                shareIcon.src = 'img/icons/ellipse.svg';
                shareIcon.alt = 'share button';
                const shareIconShape = document.createElement('img');
                shareIconShape.src = 'img/icons/shape.svg';
                shareIconShape.alt = 'share button';
                shareIconShape.classList.add('cover-btn-share-icon-shape');                   
                shareBtnIconWrapper.append(shareIcon,shareIconShape);
                shareBtn.append(shareBtnIconWrapper);

                const viewBtn = document.createElement('a');
                viewBtn.href = '#';
                viewBtn.classList.add('cover-btn-view');
                const viewBtnWrapper = document.createElement('div');
                viewBtnWrapper.classList.add('cover-btn-view-wrapper');
                const viewBtnIconShape = document.createElement('div');
                viewBtnIconShape.classList.add('cover-btn-view-icon-shape');
                viewBtnWrapper.append(viewBtnIconShape);
                viewBtn.append(viewBtnWrapper);

            picButtons.append(shareBtn, viewBtn);
            picContainerHoverDesc.append(picContainerHoverText,picContainerHoverGroup);
            picContainerHover.append(picButtons, picContainerHoverDesc);
            picContainer.prepend(galleryPic,picContainerHover);
            
            pictureSet.push(picContainer);
        });
        
        workGalleryWrapper.append(...pictureSet);
    }
    
    renderFilteredPics(selectedCategory);
    showActiveTab(allCatTab);
    
    tabPanel.addEventListener('click', click => {
        counter = 0;
        switch(click.target) {
           case allCatTab:
                selectedCategory = 'all'; 
                showActiveTab(allCatTab);
                addPicsBtn.style.cssText = 'display: grid; opacity: 1;';
                break;
            case graphicCatTab:
                selectedCategory = 'Graphic Design'
                showActiveTab(graphicCatTab);
                addPicsBtn.style.cssText = 'display: grid; opacity: 1;';
                break;
            case webCatTab:
                selectedCategory = 'Web Design';
                showActiveTab(webCatTab);
                addPicsBtn.style.cssText = 'display: grid; opacity: 1;';
                break;
            case landingCatTab:
                selectedCategory = 'Landing Pages';
                showActiveTab(landingCatTab);
                addPicsBtn.style.cssText = 'display: grid; opacity: 1;';
                break;
            case wordpressCatTab:
                selectedCategory = 'Wordpress';
                showActiveTab(wordpressCatTab);
                addPicsBtn.style.cssText = 'display: grid; opacity: 1;';
                break;
       }
       clearPictureSet();
       renderFilteredPics(selectedCategory);
    });
   
    addPicsBtn.addEventListener('click', click => {
        counter++;
        addPicsBtn.style.cssText = 'opacity: 0';
        loader.hidden = false;
        setTimeout( () => {
            switch(counter) {
                case 1:
                renderFilteredPics(`${selectedCategory}-1`);
                loader.hidden =true;
                addPicsBtn.style.cssText = 'opacity: 1';
                break;
                case 2:
                renderFilteredPics(`${selectedCategory}-2`);
                counter = 0;
                addPicsBtn.style.display = 'none';
                loader.hidden =true;
                break;
            }
        }, 2000);
    });  

}

renderPortfolio();