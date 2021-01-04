import $ from "jquery";
import { Component, OnInit} from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from "@angular/animations"

import { BetterNav } from "../library/newnavbar";
import { Product } from '../classes/product';

/*animation occures when states are changed, and you can control this animation with transition function
state -- define name of a state
style -- end styles refer to final physical result of a state at the end of a transtion - transform - scale(1) means original size
  --- once we have defined the states and the styles associated with those states, we then define the transitions ---
transition -- specify direction of one state to another
animate -- control timing of a transition
wildcard which match any state - useful as an animation can have any number of states
void state applies to any animation that is not currently attached to a view
duration - control how long an animation lasts
delay - control when animation starts
easing - control the acceleration of deceleration of an animation - ie start up fast and slow down at the end

A transition can go from one state to another (which change the style or a transition) can set a style and then the state changes it 
*/
@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',     
    animations: [
        trigger('myTrigger', [
            state('small', style({
                transform: 'scale(1)',                                
            })),
            state('large', style({
                transform: 'scale(1.4)', 
                
            })),   
            state('extra-large', style({
                transform: 'scale(2)',

            })), 
            state('fadeIn', style({
                opacity: "1",
                transform:"scale(1.2)"
            })),
            //this will animate in one direction
            //transition('small => large', animate("500ms"))
            //this will animate in either direction
            //transition('small <=> large',animate("500ms"))
            //this will animate any state to small
            //transition('* => small', animate("500ms"))
            //this will animate any state to any state
            //transition('* => *', animate("500ms"))
            //how we construct an entering and leaving animation, it starts at opacity 0 and the fadeIn brings it to 1
            //we use void because the item doesnt exist on the dom yet - item being added
            //transition('void => *', [
            //    style({ opacity: '0',transform:"translateY(20px)" }),
            //    animate("500ms 0s ease-out")                
            //])
            transition('void => *', [
                animate(500, keyframes([
                    style({
                        opacity: 0,
                        transform: "translateY(-30px)",
                        offset: 0
                    }),
                    style({
                        opacity: 1,
                        transform: "translateY(5px) scale(1.2)",
                        offset: .3
                    }),
                    style({
                        opacity: 1,
                        transform: "translateY(0) scale(1.2)",
                        offset: 1
                    })
                ]))     
            ])
        ]),
        trigger('productTrigger', [                  
            transition('* => pulse', [
                animate(500, keyframes([
                    style({
                        transform: "scale(1.0)",
                    }),
                    style({                       
                        transform: "scale(1.2)",                            
                    }),
                    style({                        
                        transform: "scale(1.0)",                        
                    })                    
                ]))
            ])      
        ])
    ]
})
export class HomeComponent implements OnInit {

    annualProducts: Array<Product> = new Array<Product>();
    eventProducts: Array<Product> = new Array<Product>();   
    state: string = "fadeIn";    
    items: Array<string> = ["item1", "item2", "item3"];
    
    

    constructor(private newnavService: BetterNav) {       

        this.initProducts();               
    }

    pulse(prod:Product) {
        prod.state = "pulse";       
    }
    
    pulseDone(event:any,prod:Product)
    {                
        prod.state = "";
    }    

    toggleState() {
       // this.state = (this.state === "small" ? "large" : "small");
        this.items.push("another item")
        this.state = "fadeIn";       
    }

    ngOnInit(): void {                             
        
        this.newnavService.init();

        $(".show-content").click(function () {
            $(".hide-content").slideToggle("slow");
        });              
    }

    initProducts()
    {

    /* ----------------- Annual Insurance --------------------- */

        this.annualProducts.push({
            link: "/landingpage/equipment-hirers-insurance",
            image: "assets/img/products/leisure-equipment.jpg",
            name: "Leisure Equipment",
            divname: "leisureequip",
            type: "annual",
            state:""
        });

        this.annualProducts.push({
            link: "/landingpage/paintball-insurance",
            image: "assets/img/products/paintball-sm.png",
            name: "Paintball Site Operators",
            divname: "paintsite",
            type: "annual",
            state: ""
        });

        this.annualProducts.push({
            link: "/landingpage/airsoft-insurance",
            image: "assets/img/products/airsoft.jpg",
            name: "Airsoft Site Operators",
            divname: "airsite",
            type: "annual",
            state: ""
        });

        this.annualProducts.push({
            link: "/landingpage/mobile-catering-trailer-insurance",
            image: "assets/img/products/catering-trailer.jpg",
            name: "Mobile Catering Trailers",
            divname: "mobilecatering",
            type: "annual",
            state: ""
        });           

        this.annualProducts.push({
            link: "/landingpage/showmen-and-fairground-insurance",
            image: "assets/img/products/showmen.jpg",
            name: "Showmen and Fairgrounds",
            divname: "showmen",
            type: "annual",
            state: ""
        });

        this.annualProducts.push({
            link: "/landingpage/events15-insurance",
            image: "assets/img/products/event-organiser.jpg",
            name: "Multiple Events - Max 15 PA",
            divname: "event15",
            type: "annual",
            state: ""
        });

        this.annualProducts.push({
            link: "/landingpage/events52-insurance",
            image: "assets/img/products/event-organiser.jpg",
            name: "Multiple Events - Max 52 PA",
            divname: "event52",
            type: "annual",
            state: ""
        });

        this.annualProducts.push({
            link: "/landingpage/stallholder-unlimited-insurance",
            image: "assets/img/products/stallholder.jpg",
            name: "Stallholders Unlimited Events",
            divname: "stallholderUnlimited",
            type: "annual",
            state: ""
        });

        this.annualProducts.push({
            link: "/landingpage/stallholder-max15-insurance",
            image: "assets/img/products/stallholder.jpg",
            name: "Stallholders Max 15 Events PA",
            divname: "stallholderMax15",
            type: "annual",
            state: ""
        });

        this.annualProducts.push({
            link: "/landingpage/exhibitors-unlimited-insurance",
            image: "assets/img/products/exhibitor.jpg",
            name: "Exhibitors Unlimited Events",
            divname: "exhibitors",
            type: "annual",
            state: ""
        });

        this.annualProducts.push({
            link: "/landingpage/exhibitors10-insurance",
            image: "assets/img/products/exhibitor.jpg",
            name: "Exhibitors Max 10 Events PA",
            divname: "exhibitors",
            type: "annual",
            state: ""
        });




    /* ----------------- Event Insurance --------------------- */

        this.eventProducts.push({
            link: "/landingpage/events15-insurance",
            image: "assets/img/products/event-organiser.jpg",
            name: "Multiple Events - Max 15 PA",
            divname: "event15",
            type: "annual",
            state: ""
        });

        this.eventProducts.push({
            link: "/landingpage/events52-insurance",
            image: "assets/img/products/event-organiser.jpg",
            name: "Multiple Events - Max 52 PA",
            divname: "event52",
            type: "annual",
            state: ""
        });

        this.eventProducts.push({
            link: "/landingpage/stallholder-unlimited-insurance",
            image: "assets/img/products/stallholder.jpg",
            name: "Stallholders Unlimited Events",
            divname: "stallholderUnlimited",
            type: "annual",
            state: ""
        });

        this.eventProducts.push({
            link: "/landingpage/stallholder-max15-insurance",
            image: "assets/img/products/stallholder.jpg",
            name: "Stallholders Max 15 Events PA",
            divname: "stallholderMax15",
            type: "annual",
            state: ""
        });

        this.eventProducts.push({
            link: "/landingpage/exhibitors-unlimited-insurance",
            image: "assets/img/products/exhibitor.jpg",
            name: "Exhibitors Unlimited Events",
            divname: "exhibitors",
            type: "annual",
            state: ""
        });

        this.eventProducts.push({
            link: "/landingpage/exhibitors10-insurance",
            image: "assets/img/products/exhibitor.jpg",
            name: "Exhibitors Max 10 Events PA",
            divname: "exhibitors",
            type: "annual",
            state: ""
        });
    }   

    slideConfig =
        {
            "infinite": false,
            "slidesToShow": 4,
            "swipe": true,
            "swipeToSlide": true,
            "touchMove": true,
            "touchThreshold": 100,
            "arrows": true,
            "slidesToScroll": 1,
            "autoplay": true,
            "autoplaySpeed": 2000,
            "pauseOnFocus": true,
            "dots": true,
            "responsive": [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }               
            ],
        };   

    slickInit(e:any) {
        console.log('slick initialized');
    }

    breakpoint(e: any) {
       
    }

    afterChange(e: any) {
        console.log('afterChange', e, e.slick.slideCount, "slideCount", "currentSlide", e.slick.currentSlide);
        if ((e.slick.currentSlide + 4) === e.slick.slideCount)
        {
            e.slick.slickGoTo(0);    
        }
       
    }

    beforeChange(event: any ) {      
       
        
    }
    
}




