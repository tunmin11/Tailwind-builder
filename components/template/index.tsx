import { Component } from "react";
import FooterT1 from "./footer/t_1";
import HeaderT1 from "./header/t_1";
import NavigationT1 from "./navigation/t_1";
import PricingT1 from "./pricing/t_1";
import LightThemeStatics from "./statics/light";
import TeamT1 from "./team/t_1";

const Types: { [type:string] : string } = {
    Header : "Header",
    Navigation : "Navigation",
    Pricing : "Pricing",
    Team : "Team",
    Footer : "Footer",
    Statics : "Statics"
} 

interface TComponent {
    name? : string,
    component? : any,
}

const components: { [type:string]:Array<TComponent> } = {
    [Types.Header] : [],
    [Types.Navigation] : [],
    [Types.Pricing] : [],
    [Types.Team] : [],
    [Types.Footer] : [],
    [Types.Statics] : [],
}


function register(type:string, template:string, component:any){
    components[type].push({ name : template, component });
}

// Header 
register(Types.Header, "Template 1",  HeaderT1);

// Navigation 
register(Types.Navigation, "Template 1",  NavigationT1);

// Pricing 
register(Types.Pricing, "Template 1",  PricingT1);

// Team 
register(Types.Team, "Template 1",  TeamT1);

// Footer 
register(Types.Footer, "Template 1",  FooterT1)

// Statics
register(Types.Statics, "Light",  LightThemeStatics)



export default components;